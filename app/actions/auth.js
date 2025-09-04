export async function signin(data) {
  console.log("data====", data);
  // Previous steps:
  // 1. Validate form fields
  // 2. Prepare data for insertion into database
  // 3. Insert the user into the database or call an Library API

  // Current steps:
  // 4. Create user session
  try {
    const response = await fetch("/api/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.status != 200) {
      throw new Error("Error: " + response.message);
    }
    const responseData = await response.json();
    console.log("responseData", responseData);
    return responseData;
  } catch (err) {
    console.error(
      "Error occurred in authenticating the user. Message: ",
      err.message
    );
  }
  // 5. Redirect user
  //   redirect("/products");
}

export async function signOut() {
  const response = await fetch("/api/auth/signout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  if (response == 200) {
    return true;
    //throw new Error("Could not sign out");
  }
}
