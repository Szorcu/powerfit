"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/atoms/Button";
import Autoplay from "embla-carousel-autoplay";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];

type CarouselProps = {
  opts?: CarouselOptions;
  delay?: number;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
}

function Carousel({
  orientation = "horizontal",
  opts,
  delay,
  setApi,
  children,
  ...props
}: React.ComponentProps<"div"> & CarouselProps) {
  const autoplay = useRef(
    Autoplay({
      stopOnInteraction: false,
      delay: delay ?? 3000,
    }),
  );
  const [carouselRef, api] = useEmblaCarousel(
    {
      loop: true,
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
    },
    [autoplay.current],
  );
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback((api: CarouselApi) => {
    if (!api) return;
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  const scrollPrev = useCallback(() => {
    api?.scrollPrev();
    autoplay.current.reset();
  }, [api]);

  const scrollNext = useCallback(() => {
    api?.scrollNext();
    autoplay.current.reset();
  }, [api]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext],
  );

  useEffect(() => {
    if (!api || !setApi) return;
    setApi(api);
  }, [api, setApi]);

  useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);

    return () => {
      api?.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        orientation:
          orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div
        onKeyDownCapture={handleKeyDown}
        role="region"
        aria-roledescription="carousel"
        data-slot="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

function CarouselContent({ className, ...props }: React.ComponentProps<"div">) {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div
      ref={carouselRef}
      className="overflow-hidden"
      data-slot="carousel-content"
    >
      <div
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className,
        )}
        {...props}
      />
    </div>
  );
}

function CarouselItem({ className, ...props }: React.ComponentProps<"div">) {
  const { orientation } = useCarousel();

  return (
    <div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className,
      )}
      {...props}
    />
  );
}

function CarouselPrevious({
  className,
  variant = "outline",
  size = "icon",
  ...props
}: React.ComponentProps<typeof Button>) {
  const { scrollPrev, canScrollPrev } = useCarousel();

  return (
    <Button
      data-slot="carousel-previous"
      variant={variant}
      size={size}
      className={cn("size-12 rounded-full", className)}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <svg
        className="size-6"
        viewBox="0 0 27 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.83979 5.79416L10.6051 6.55948L4.04525 13.1193L10.6051 19.6792L9.83979 20.4445L2.51461 13.1193L9.83979 5.79416Z"
          fill="currentColor"
        />
        <path
          d="M23.5062 13.6662L3.82659 13.6662L3.82659 12.5729L23.5062 12.5729L23.5062 13.6662Z"
          fill="currentColor"
        />
        <path
          d="M3.27996 12.5729L4.37327 12.5729C4.70126 12.5729 4.91992 12.7915 4.91992 13.1195C4.91992 13.4475 4.70126 13.6662 4.37327 13.6662L3.27996 13.6662C2.95196 13.6662 2.7333 13.4475 2.7333 13.1195C2.7333 12.7915 2.95196 12.5729 3.27996 12.5729Z"
          fill="currentColor"
        />
      </svg>

      <span className="sr-only">Previous slide</span>
    </Button>
  );
}

function CarouselNext({
  className,
  variant = "outline",
  size = "icon",
  ...props
}: React.ComponentProps<typeof Button>) {
  const { scrollNext, canScrollNext } = useCarousel();

  return (
    <Button
      data-slot="carousel-next"
      variant={variant}
      size={size}
      className={cn("size-12 rounded-full", className)}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <svg
        className="size-6 rotate-180"
        viewBox="0 0 27 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.83979 5.79416L10.6051 6.55948L4.04525 13.1193L10.6051 19.6792L9.83979 20.4445L2.51461 13.1193L9.83979 5.79416Z"
          fill="currentColor"
        />
        <path
          d="M23.5062 13.6662L3.82659 13.6662L3.82659 12.5729L23.5062 12.5729L23.5062 13.6662Z"
          fill="currentColor"
        />
        <path
          d="M3.27996 12.5729L4.37327 12.5729C4.70126 12.5729 4.91992 12.7915 4.91992 13.1195C4.91992 13.4475 4.70126 13.6662 4.37327 13.6662L3.27996 13.6662C2.95196 13.6662 2.7333 13.4475 2.7333 13.1195C2.7333 12.7915 2.95196 12.5729 3.27996 12.5729Z"
          fill="currentColor"
        />
      </svg>

      <span className="sr-only">Next slide</span>
    </Button>
  );
}

function CarouselButtons() {
  return (
    <div className="flex gap-3">
      <CarouselPrevious />
      <CarouselNext />
    </div>
  );
}

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselButtons,
};
