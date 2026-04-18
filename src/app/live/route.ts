import { redirect } from "next/navigation";

export async function GET() {
  redirect(
    "/?utm_source=twitch&utm_medium=stream_overlay&utm_campaign=faith_walk",
  );
}
