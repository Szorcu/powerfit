import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/atoms/Accordion";
import { FAQ } from "@/consts/faq";

export const FaqSection = () => {
  return (
    <section className="flex w-full justify-center bg-gray-50">
      <div className="container py-7 sm:py-20 xl:max-w-7xl">
        <h2 className="mb-8 sm:mb-8">Najczęściej zadawane pytania</h2>

        <Accordion type="single" collapsible className="w-full">
          {FAQ.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
