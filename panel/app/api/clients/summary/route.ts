import { NextRequest, NextResponse } from 'next/server';
import { getClientsSummary } from '@/lib/sql';

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const windowParam = url.searchParams.get('window') || '24h';
    const m = windowParam.match(/^(\d+)(h|d)$/i);
    const num = m ? parseInt(m[1], 10) : 24;
    const hours = m?.[2] === 'd' ? num * 24 : num;
    const data = await getClientsSummary(hours);
    return NextResponse.json({ items: data });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || 'failed' }, { status: 500 });
  }
}

