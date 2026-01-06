export const buildUrl = (path: string) => {
  const baseUrl = "https://powerfitbialystok.pl";

  return `${baseUrl}${path.startsWith("/") ? "" : "/"}${path}`;
};
