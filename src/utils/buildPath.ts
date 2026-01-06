export const buildPath = (path: string) => {
  return `${path.startsWith("/") ? "" : "/"}${path}`;
};
