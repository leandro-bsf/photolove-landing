const UTM_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
];

export function getAppRegisterUrl(): string {
  const params = new URLSearchParams(window.location.search);

  const appUrl = new URL(
    "https://app.photolove.com.br/cadastro"
  );

  UTM_PARAMS.forEach((param) => {
    const value = params.get(param);

    if (value) {
      appUrl.searchParams.set(param, value);
    }
  });

  return appUrl.toString();
}