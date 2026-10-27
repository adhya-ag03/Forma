import { NextResponse } from "next/server";
import { store } from "../../../lib/store";

export const dynamic = "force-dynamic";

/* POST /api/newsletter  { email } */
export async function POST(request) {
  let email;
  try {
    ({ email } = await request.json());
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }
  if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address" }, { status: 400 });
  }
  if (!store.subscribers.includes(email)) store.subscribers.push(email);
  return NextResponse.json({ ok: true, count: 12840 + store.subscribers.length });
}
