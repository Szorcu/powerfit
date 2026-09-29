import { Metadata } from "next";
import { PageHeader } from "@/components/organisms/PageHeader";
import { ROUTE_PATHS } from "@/consts/routePaths";
import { buildPath } from "@/utils/buildPath";

export const metadata: Metadata = {
  title: "Cennik | Power Fit Białystok",
  description:
    "Sprawdź cennik karnetów Power Fit – siłowni na osiedlu Nowe Miasto w Białymstoku. Karnety na siłownię i zajęcia grupowe – kup online lub w klubie.",
  alternates: { canonical: buildPath(ROUTE_PATHS.pricing) },
};

const PricingPage = () => {
  return (
    <>
      <PageHeader
        title="Cennik karnetów"
        crumbLabel="Cennik"
        bgImageSrc="page-header-1.jpg"
      />

      <iframe
        title="efitness-pricing"
        src="https://powerfit-bialystok.cms.efitness.com.pl/kup-karnet"
        className="h-[90svh] w-full"
      />
    </>
  );
};

export default PricingPage;
