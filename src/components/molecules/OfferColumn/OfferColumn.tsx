import { Card, CardContent } from "@/components/atoms/Card";
import { OfferColumnProps } from "./OfferColumn.types";
import { Button } from "@/components/atoms/Button";
import {
  Carousel,
  CarouselButtons,
  CarouselContent,
  CarouselItem,
} from "@/components/atoms/Carousel";
import Link from "next/link";

export const OfferColumn = ({ title }: OfferColumnProps) => {
  return (
    <div className="flex flex-col gap-8">
      <h3 className="text-xl">{title}</h3>

      <Carousel className="flex flex-col gap-8">
        <CarouselContent>
          <CarouselItem>
            <Card className="border-border/20 bg-transparent text-inherit shadow-none">
              <CardContent>TBD</CardContent>
            </Card>
          </CarouselItem>
        </CarouselContent>

        <div className="flex flex-col-reverse items-center gap-8 sm:flex-row sm:justify-between">
          <Button className="w-fit" asChild>
            <Link href="oferta">Zobacz wszystkie</Link>
          </Button>
          <CarouselButtons />
        </div>
      </Carousel>
    </div>
  );
};
