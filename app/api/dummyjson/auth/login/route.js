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
      const response2 = new Response(
        JSON.stringify({
          data,
        }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response2;
    }
  } catch (err) {
    console.log("Error: ", err.message);
  }
}
