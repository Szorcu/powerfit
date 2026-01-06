import type { MetadataRoute } from "next";
import { ROUTE_PATHS } from "@/consts/routePaths";
import { buildUrl } from "@/utils/buildUrl";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: buildUrl(ROUTE_PATHS.sitemap),
  };
}
