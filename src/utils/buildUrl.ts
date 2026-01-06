import { BASE_URL } from "@/consts/baseUrl";

export const buildUrl = (path: string) => {
  return `${BASE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
};
