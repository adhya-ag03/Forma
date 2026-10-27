import { NextResponse } from "next/server";
import { store } from "../../../lib/store";

export const dynamic = "force-dynamic";

/* GET /api/shots — current like totals, keyed by shot id. */
export async function GET() {
  return NextResponse.json({ likes: store.likes });
}
