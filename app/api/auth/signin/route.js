import { createSession } from "@/app/lib/session";
import { headers, cookies } from "next/headers";

export async function POST(request) {
  const body = await request.json();
  const { email, password } = body;

  const headersList = await headers();
//   const referer = headersList.get("referer");
//   const userAgent = request.headers.get("user-agent");
  // TODO
  // call user-service api to get JWT token
//   const secret = "qwertyuiopasdfghjklzxcvbnm123456";
  const jwt =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJOaXlhdmEgVGVjaG5vbG9naWVzIiwiaWF0IjoxNzU2OTAwNTMzLCJleHAiOjE3ODg2OTU3MzMsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6MzAwMCIsInN1YiI6ImpvaG4uZG9lQG1haWwuY29tIiwiR2l2ZW5OYW1lIjoiSm9obiIsIkVtYWlsIjoiam9obi5kb2VAbWFpbC5jb20ifQ.eY3oDwXDVXS3eE77ilqYQzejJ6LZHMrT7E5tdlXRXHk";
  await createSession(jwt);

  const response = new Response(
    JSON.stringify({
      email,
      authenticated: true,
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
