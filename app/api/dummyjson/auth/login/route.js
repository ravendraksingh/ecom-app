import { serialize } from "cookie";
import { NextResponse } from "next/server";
export async function POST(request) {
  //   const body = await request.json();
  try {
    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "emilys",
        password: "emilyspass",
        expiresInMins: 30, // optional, defaults to 60
      }),
      credentials: "include", // Include cookies (e.g., accessToken) in the request
    });
    if (response.status == 200) {
      const data = await response.json(); 
      const accessTokenCookie = serialize("accessToken", data?.accessToken, {
        httpOnly: true,
        secure: true,
        maxAge: 9000,
        sameSite: "strict",
        parth: "/"
      })

      const res = NextResponse.json(data);
      res.headers.append("Set-Cookie", accessTokenCookie);
      return res;
    }
  } catch (err) {
    console.log("Error: ", err.message);
  }
}
