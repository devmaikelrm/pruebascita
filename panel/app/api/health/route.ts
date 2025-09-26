import { NextResponse } from 'next/server';
import { getHeartbeats } from '@/lib/sql';

export async function GET() {
  try {
    const hb = await getHeartbeats();
    const now = Date.now();
    const online = (d: any) => !!d && (now - new Date(d).getTime()) / 1000 < 120;
    return NextResponse.json({
      bot: { online: online(hb.bot), last_seen: hb.bot },
      worker: { online: online(hb.worker), last_seen: hb.worker },
    });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || 'failed' }, { status: 500 });
  }
}

