import { OfferCard } from "@/components/molecules/OfferCard";
import { PageHeader } from "@/components/organisms/PageHeader";
import { CLASSES } from "@/consts/classes";
import { SERVICES } from "@/consts/services";

const OfferPage = () => {
  return (
    <>
      <PageHeader
        title="Oferta zajęć i usług"
        crumbLabel="Oferta"
        bgImageSrc="page-header-2.jpg"
      />

      <section id="zajecia" className="flex w-full scroll-mt-16 justify-center">
        <div className="container py-7 sm:py-20">
          <h2 className="mb-8">Nasze zajęcia</h2>
          <ul className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {CLASSES.map((item, index) => (
              <li key={index}>
                <OfferCard
                  className="border bg-white shadow-sm"
                  img={item.img}
                  title={item.title}
                  description={item.description}
                  duration={item.duration}
                  intensity={item.intensity}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="uslugi" className="flex w-full scroll-mt-16 justify-center">
        <div className="container py-7 sm:py-20">
          <h2 className="mb-8">Nasze usługi</h2>
          <ul className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {SERVICES.map((item, index) => (
              <li key={index}>
                <OfferCard
                  className="max-w-xl border bg-white shadow-sm"
                  img={item.img}
                  title={item.title}
                  description={item.description}
                  duration={item.duration}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default OfferPage;
