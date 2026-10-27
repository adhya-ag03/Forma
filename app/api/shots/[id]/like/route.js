import { NextResponse } from "next/server";
import { store } from "../../../../../lib/store";

export const dynamic = "force-dynamic";

/* POST /api/shots/:id/like  { delta: 1 | -1 } */
export async function POST(request, { params }) {
  const id = Number(params.id);
  let delta;
  try {
    ({ delta } = await request.json());
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }
  if (!(id in store.likes) || (delta !== 1 && delta !== -1)) {
    return NextResponse.json({ error: "Unknown shot or bad delta" }, { status: 400 });
  }
  store.likes[id] = Math.max(0, store.likes[id] + delta);
  return NextResponse.json({ id, likes: store.likes[id] });
}
