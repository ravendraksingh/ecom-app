import { deleteSession } from "@/app/lib/session";

export async function POST(request) {
  await deleteSession();

  const response = new Response(
    JSON.stringify({
      authenticated: false,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response;
}
