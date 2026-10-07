"use client";

import ExportedImage from "next-image-export-optimizer";
import { TrainerCardProps } from "./TrainerCard.types";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useState } from "react";
import clsx from "clsx";

export const TrainerCard = ({
  name,
  description,
  classes,
  img,
}: TrainerCardProps) => {
  const isTouchLike = useMediaQuery("(hover: none) and (pointer: coarse)");

  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <article
      className={clsx("group relative aspect-3/4 overflow-hidden rounded-lg", {
        "cursor-pointer": isTouchLike,
      })}
      itemScope
      itemType="https://schema.org/Person"
      onClick={() => isTouchLike && setShowOverlay((prev) => !prev)}
      onMouseEnter={() => !isTouchLike && setShowOverlay(true)}
      onMouseLeave={() => !isTouchLike && setShowOverlay(false)}
    >
      <div className="absolute inset-0">
        <ExportedImage
          className="object-cover"
          src={img}
          alt={name}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          itemProp="image"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
      </div>

      <div
        className={clsx(
          "bg-secondary absolute inset-0 flex flex-col justify-between p-6 text-sm text-white opacity-0 transition-opacity duration-300",
          {
            "opacity-100": showOverlay,
          },
        )}
      >
        <div className="flex min-h-0 flex-col">
          <h3 className="text-xl" itemProp="name">
            {name}
          </h3>
          <p
            className="mt-2 flex-1 overflow-y-auto leading-relaxed"
            itemProp="description"
          >
            {description}
          </p>
        </div>

        <div className="mt-4 shrink-0 border-t border-white/20 pt-4">
          <p className="font-semibold">Zajęcia:</p>
          <p itemProp="knowsAbout">{classes.join(", ")}</p>
        </div>
      </div>
    </article>
  );
};
