export async function GET(request) {
  try {
    const response = await fetch("https://dummyjson.com/cart/8", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status != 200) {
      throw new Error("Error fetching products from API");
    }
    const data = await response.json();
    console.log("data from dummyjson", data);

    const apiResponse = new Response(
      JSON.stringify(data),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return apiResponse;
  } catch (err) {
    console.log("Error: " + err);
  }
}
