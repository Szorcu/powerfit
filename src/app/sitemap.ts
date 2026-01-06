import type { MetadataRoute } from "next";
import { ROUTE_PATHS } from "@/consts/routePaths";
import { buildUrl } from "@/utils/buildUrl";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: buildUrl(ROUTE_PATHS.home),
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: buildUrl(ROUTE_PATHS.offer),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: buildUrl(ROUTE_PATHS.aboutUs),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: buildUrl(ROUTE_PATHS.trainers),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: buildUrl(ROUTE_PATHS.termsAndConditions),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.1,
    },
    {
      url: buildUrl(ROUTE_PATHS.privacyPolicy),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.1,
    },
  ];
}
