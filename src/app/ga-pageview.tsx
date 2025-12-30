"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { GA_TRACKING_ID } from "@/consts/googleAnalytics";

export default function GAPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const search = searchParams?.toString() ?? "";

  useEffect(() => {
    const url = pathname + (search ? `?${search}` : "");

    if (
      typeof window === "undefined" ||
      "gtag" in window === false ||
      typeof window.gtag !== "function"
    ) {
      return;
    }

    window.gtag("config", GA_TRACKING_ID, { page_path: url });
  }, [pathname, search]);

  return null;
}
