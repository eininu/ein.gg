export async function onRequestGet({ request }) {
  const url = new URL(request.url);

  if (url.pathname.startsWith("/api/")) {
    const gcfUrl =
      "https://us-central1-ein-gg.cloudfunctions.net/helloWorld" +
      url.pathname.slice(4);
    const newRequest = new Request(gcfUrl, request);
    return await fetch(newRequest);
  }

  return null;
}
