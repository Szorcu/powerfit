import { Card, CardContent } from "@/components/atoms/Card";
import { OfferColumnProps } from "./OfferColumn.types";
import { Button } from "@/components/atoms/Button";
import {
  Carousel,
  CarouselButtons,
  CarouselContent,
  CarouselItem,
} from "@/components/atoms/Carousel";

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

        <div className="flex justify-between">
          <Button>Zobacz wszystkie</Button>
          <CarouselButtons />
        </div>
      </Carousel>
    </div>
  );
};
