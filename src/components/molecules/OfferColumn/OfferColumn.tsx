import Link from "next/link";
import { Button } from "@/components/atoms/Button";
import {
  Carousel,
  CarouselButtons,
  CarouselContent,
  CarouselItem,
} from "@/components/atoms/Carousel";
import { OfferCard } from "../OfferCard";
import { OfferColumnProps } from "./OfferColumn.types";

export const OfferColumn = ({ title, items, redirectTo }: OfferColumnProps) => {
  return (
    <div className="flex max-w-xl flex-col gap-8">
      <h2 className="text-xl">{title}</h2>

      <Carousel className="flex flex-col gap-4" delay={7000}>
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={index}>
              <OfferCard
                img={item.img}
                title={item.title}
                description={item.description}
                duration={item.duration}
                intensity={"intensity" in item ? item.intensity : undefined}
                withHover={false}
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="flex flex-col-reverse items-center gap-4 sm:flex-row sm:justify-between">
          <Button className="w-fit" asChild>
            <Link href={redirectTo}>Zobacz wszystkie</Link>
          </Button>
          <CarouselButtons />
        </div>
      </Carousel>
    </div>
  );
};
