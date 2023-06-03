async function proxyToGCF(context) {
  const url = new URL(context.request.url);

  if (url.pathname.startsWith("/api/")) {
    const gcfUrl =
      "https://us-central1-ein-gg.cloudfunctions.net/helloWorld" +
      url.pathname.slice(4);
    const newRequest = new Request(gcfUrl, context.request);
    return await fetch(newRequest);
  }

  return await context.next();
}

export const onRequest = [proxyToGCF];
