export async function getHello(accessToken: string): Promise<string> {
  const response = await fetch("http://localhost:4000", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({}),
  });

  const hello = await response.text();

  console.log("Hello: ", hello);

  return hello;
}
