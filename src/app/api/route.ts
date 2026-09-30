import { NextResponse } from "next/server";

// Cloudflare Pages requires all dynamic routes to use the Edge Runtime.
// z.ai sandbox and Vercel don't care, so this flag is harmless everywhere.
export const runtime = "edge";

export async function GET() {
  return NextResponse.json({ message: "Hello, world!" });
}