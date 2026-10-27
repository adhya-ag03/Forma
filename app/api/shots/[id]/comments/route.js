import { NextResponse } from "next/server";
import { store } from "../../../../../lib/store";

export const dynamic = "force-dynamic";

/* GET /api/shots/:id/comments */
export async function GET(_request, { params }) {
  const id = Number(params.id);
  const comments = store.comments[id];
  if (!comments) return NextResponse.json({ error: "Unknown shot" }, { status: 404 });
  return NextResponse.json({ comments });
}

/* POST /api/shots/:id/comments  { text } */
export async function POST(request, { params }) {
  const id = Number(params.id);
  if (!store.comments[id]) return NextResponse.json({ error: "Unknown shot" }, { status: 404 });
  let text;
  try {
    ({ text } = await request.json());
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }
  text = typeof text === "string" ? text.trim() : "";
  if (!text || text.length > 500) {
    return NextResponse.json({ error: "Comment must be 1–500 characters" }, { status: 400 });
  }
  const comment = {
    id: crypto.randomUUID(),
    author: "You",
    init: "YOU",
    hue: "#3D5AFE",
    when: "now",
    text,
  };
  store.comments[id].push(comment);
  return NextResponse.json({ comment }, { status: 201 });
}
