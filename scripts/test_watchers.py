import argparse
import json
import random
import time
import urllib.parse
import urllib.request
from typing import Dict, Any

PROFILES = {
    "dni": {
        "label": "DNI",
        "publickey": "2f21cd9c0d8aa26725bf8930e4691d645",
        "service": "bkt195382",
        "agenda": "bkt93764",
        "src": "https://www.citaconsular.es/es/hosteds/widgetdefault/2f21cd9c0d8aa26725bf8930e4691d645/bkt195382",
        "srvsrc": "https://citaconsular.es",
    },
    "turismo": {
        "label": "TURISMO",
        "publickey": "28db94e270580be60f6e00285a7d8141f",
        "service": "bkt873048",
        "agenda": "bkt307945",
        "src": "https://www.citaconsular.es/es/hosteds/widgetdefault/28db94e270580be60f6e00285a7d8141f/bkt873048",
        "srvsrc": "https://citaconsular.es",
    },
}


def build_url(cfg: Dict[str, str], start: str, end: str, callback: str) -> str:
    params = [
        ("callback", callback),
        ("type", "default"),
        ("publickey", cfg["publickey"]),
        ("lang", "es"),
        ("services[]", cfg["service"]),
        ("agendas[]", cfg["agenda"]),
        ("version", "5"),
        ("src", cfg["src"]),
        ("srvsrc", cfg["srvsrc"]),
        ("start", start),
        ("end", end),
        ("selectedPeople", "1"),
        ("_", str(int(time.time() * 1000))),
    ]
    return "https://citaconsular.es/onlinebookings/datetime/?" + urllib.parse.urlencode(params)


def strip_jsonp(callback: str, payload: str) -> str:
    prefix = f"{callback}("
    if payload.startswith(prefix) and payload.endswith(");"):
        return payload[len(prefix):-2]
    if payload.startswith(prefix) and payload.endswith(")"):
        return payload[len(prefix):-1]
    return payload


def fetch_profile(name: str, days: int) -> Dict[str, Any]:
    cfg = PROFILES[name]
    today = time.strftime("%Y-%m-%d")
    end_ts = time.time() + days * 86400
    end_date = time.strftime("%Y-%m-%d", time.localtime(end_ts))
    callback = f"jQuery{random.randint(10**10, 10**12 - 1)}_{int(time.time() * 1000)}"
    url = build_url(cfg, today, end_date, callback)
    req = urllib.request.Request(
        url,
        headers={
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
            "Referer": cfg["src"],
            "Accept": "*/*",
        },
    )
    with urllib.request.urlopen(req, timeout=30) as resp:
        raw_bytes = resp.read()
    raw_text = raw_bytes.decode("utf-8", errors="replace")
    json_str = strip_jsonp(callback, raw_text)
    try:
        data = json.loads(json_str)
    except json.JSONDecodeError as exc:
        snippet = raw_text[:200]
        raise RuntimeError(
            f"JSON decode error: {exc}: raw_len={len(raw_bytes)} raw_sample={snippet!r}"
        ) from exc
    return {"profile": cfg["label"], "data": data}


def summarize(data: Dict[str, Any]) -> Dict[str, Any]:
    slots = data.get("Slots")
    summary = {
        "days_total": 0,
        "days_with_times": 0,
        "first_day": None,
        "first_times": [],
    }
    if isinstance(slots, list):
        summary["days_total"] = len(slots)
        for entry in slots:
            times = []
            if isinstance(entry, dict):
                if isinstance(entry.get("times"), dict):
                    times = [v.get("time") for v in entry["times"].values() if isinstance(v, dict) and v.get("time")]
                elif isinstance(entry.get("Times"), list):
                    times = [t.get("time") if isinstance(t, dict) else t for t in entry["Times"]]
            times = [t for t in times if t]
            if times and not summary["first_day"]:
                summary["first_day"] = entry.get("date") or entry.get("Date")
                summary["first_times"] = times[:8]
            if times:
                summary["days_with_times"] += 1
    return summary


def main() -> None:
    parser = argparse.ArgumentParser(description="Prueba rápida de disponibilidad Bookitit")
    parser.add_argument("profile", choices=sorted(PROFILES.keys()) + ["todos"], help="Perfil a consultar")
    parser.add_argument("--days", type=int, default=30, help="Horizonte de días")
    args = parser.parse_args()

    names = PROFILES.keys() if args.profile == "todos" else [args.profile]

    for name in names:
        try:
            result = fetch_profile(name, args.days)
            summary = summarize(result["data"])
            print(f"[{result['profile']}] Días devueltos: {summary['days_total']}, días con horas: {summary['days_with_times']}")
            if summary["first_day"]:
                print(f"  Primer día con horas: {summary['first_day']} -> {', '.join(summary['first_times'])}")
            else:
                print("  Sin horas disponibles en el rango consultado")
        except Exception as exc:
            print(f"[{name.upper()}] Error: {exc}")


if __name__ == "__main__":
    main()

