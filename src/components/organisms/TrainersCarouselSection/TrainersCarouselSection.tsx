import { Button } from "@/components/atoms/Button";
import {
  Carousel,
  CarouselButtons,
  CarouselContent,
  CarouselItem,
} from "@/components/atoms/Carousel";
import Link from "next/link";
import { TrainerCard } from "@/components/molecules/TrainerCard";
import { TRAINERS } from "@/consts/trainers";

export const TrainersCarouselSection = () => {
  return (
    <section className="flex w-full justify-center">
      <div className="container py-7 sm:py-20">
        <h2 className="mb-8 sm:mb-16">Nasi trenerzy, nasz zespół</h2>

        <Carousel
          opts={{ align: "start" }}
          className="flex flex-col gap-4 sm:gap-8"
        >
          <CarouselContent>
            {TRAINERS.map((item, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <TrainerCard
                  img={item.img}
                  name={item.name}
                  description={item.description}
                  classes={item.classes}
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex flex-col items-center gap-4 sm:flex-row-reverse sm:justify-between">
            <CarouselButtons />

            <Button asChild className="w-fit">
              <Link href="trenerzy">Wszyscy trenerzy</Link>
            </Button>
          </div>
        </Carousel>
      </div>
    </section>
  );
};
