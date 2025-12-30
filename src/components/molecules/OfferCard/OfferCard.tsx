"use client";

import clsx from "clsx";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/atoms/Card";
import { IntensityIndicator } from "@/components/atoms/IntensityIndicator";
import { OfferCardProps } from "./OfferCard.types";
import { useState } from "react";
import { Button } from "@/components/atoms/Button";

export const OfferCard = ({
  img,
  title,
  summary,
  description,
  duration,
  className,
  intensity,
  withHover = true,
}: OfferCardProps) => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <Card
      className={clsx(
        "group border-border/20 relative min-h-fit overflow-hidden bg-transparent pt-0 text-inherit shadow-none",
        withHover &&
          "transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
        className,
      )}
    >
      <CardHeader className="relative aspect-5/3 shrink-0">
        <Image src={img} alt={title} fill className="object-cover" />
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <h3 className="line-clamp-1 text-xl">{title}</h3>
        <p className="line-clamp-3 text-sm">{summary}</p>

        <Button
          className="font-zalando w-fit p-0 text-sm font-semibold text-current underline hover:text-current/80"
          variant="link"
          onClick={() => setShowOverlay(true)}
        >
          czytaj więcej
        </Button>
      </CardContent>
      <CardFooter
        className={clsx(
          "mt-auto gap-4",
          intensity ? "justify-between" : "justify-end",
        )}
      >
        {intensity && <IntensityIndicator value={intensity} />}

        <div className="flex gap-2 text-sm">
          <svg
            width="20"
            height="20"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.4583 0C9.19209 0 6.97674 0.672019 5.09243 1.93108C3.20812 3.19014 1.73947 4.97968 0.872219 7.07342C0.00496476 9.16716 -0.221949 11.471 0.220174 13.6937C0.662296 15.9164 1.7536 17.9581 3.35607 19.5606C4.95855 21.1631 7.00023 22.2544 9.22293 22.6965C11.4456 23.1386 13.7495 22.9117 15.8433 22.0445C17.937 21.1772 19.7265 19.7086 20.9856 17.8242C22.2447 15.9399 22.9167 13.7246 22.9167 11.4583C22.9131 8.4205 21.7047 5.5081 19.5566 3.36003C17.4086 1.21195 14.4962 0.00358382 11.4583 0ZM15.3198 15.3198C15.1245 15.5151 14.8596 15.6248 14.5833 15.6248C14.3071 15.6248 14.0422 15.5151 13.8469 15.3198L10.7219 12.1948C10.5265 11.9995 10.4167 11.7346 10.4167 11.4583V5.20833C10.4167 4.93207 10.5264 4.66711 10.7218 4.47176C10.9171 4.27641 11.1821 4.16667 11.4583 4.16667C11.7346 4.16667 11.9996 4.27641 12.1949 4.47176C12.3903 4.66711 12.5 4.93207 12.5 5.20833V11.0271L15.3198 13.8469C15.5151 14.0422 15.6248 14.3071 15.6248 14.5833C15.6248 14.8595 15.5151 15.1245 15.3198 15.3198Z"
              fill="currentColor"
            />
          </svg>
          {duration}
        </div>
      </CardFooter>

      <div
        className={clsx(
          "text-foreground absolute inset-0 flex flex-col justify-between bg-white/90 p-6 text-sm backdrop-blur-sm transition-opacity duration-300",
          showOverlay
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
      >
        <div className="overflow-auto pb-4 leading-relaxed whitespace-pre-line">
          {description}
        </div>

        <div className="border-t border-black/10 pt-4">
          <Button
            className="font-zalando w-fit p-0 text-sm font-semibold text-current underline hover:text-current/80"
            variant="link"
            onClick={() => setShowOverlay(false)}
          >
            zwiń opis
          </Button>
        </div>
      </div>
    </Card>
  );
};
