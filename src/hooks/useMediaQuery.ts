"use client";

import { useEffect, useState } from "react";

export const useMediaQuery = (query: string) => {
  const [isMatching, setIsMatching] = useState(false);

  useEffect(() => {
    const updateMatches = (mql: MediaQueryListEvent | MediaQueryList) => {
      setIsMatching(mql.matches);
    };

    const mql = window.matchMedia(query);

    updateMatches(mql);

    mql.addEventListener("change", updateMatches);

    return () => {
      mql.removeEventListener("change", updateMatches);
    };
  }, [query]);

  return isMatching;
};
