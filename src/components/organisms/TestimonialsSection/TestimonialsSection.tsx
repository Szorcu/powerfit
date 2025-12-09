import { Noise } from "@/components/atoms/Noise";

export const TestimonialsSection = () => {
  return (
    <section className="bg-secondary relative flex h-96 w-full justify-center text-white">
      <Noise />

      <div className="container grid gap-20 py-7 sm:py-20 xl:grid-cols-[2fr_3fr] xl:gap-40"></div>
    </section>
  );
};
