(function (n, i, v, r, s, c, x, z) {
  x = window.AwsRumClient = { q: [], n: n, i: i, v: v, r: r, c: c };
  window[n] = function (c, p) {
    x.q.push({ c: c, p: p });
  };
  z = document.createElement("script");
  z.async = true;
  z.src = s;
  document.head.insertBefore(z, document.getElementsByTagName("script")[0]);
})(
  "cwr",
  "d0b3def2-23da-4e5b-a22d-59e550f2a0a0",
  "0.1.0",
  "us-east-2",
  "https://client.rum.us-east-1.amazonaws.com/1.0.2/cwr.js",
  {
    sessionSampleRate: 1,
    guestRoleArn:
      "arn:aws:iam::975655119315:role/RUM-Monitor-us-east-2-975655119315-9684475413861-Unauth",
    identityPoolId: "us-east-2:f133949d-213a-4797-8035-a5397ae4d707",
    endpoint: "https://dataplane.rum.us-east-2.amazonaws.com",
    telemetries: ["performance", "errors", "http"],
    allowCookies: true,
    enableXRay: true,
  },
);
