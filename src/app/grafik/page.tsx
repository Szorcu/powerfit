import { Metadata } from "next";
import { PageHeader } from "@/components/organisms/PageHeader";
import { ROUTE_PATHS } from "@/consts/routePaths";
import { buildPath } from "@/utils/buildPath";

export const metadata: Metadata = {
  title: "Grafik zajęć | Power Fit Białystok",
  description:
    "Aktualny grafik zajęć grupowych Power Fit – siłowni na osiedlu Nowe Miasto w Białymstoku. Sprawdź terminy treningów i zapisz się online.",
  alternates: { canonical: buildPath(ROUTE_PATHS.classSchedule) },
};

const ClassSchedulePage = () => {
  return (
    <>
      <PageHeader
        title="Grafik zajęć"
        crumbLabel="Grafik"
        bgImageSrc="page-header-1.jpg"
      />

      <iframe
        title="efitness-schedule"
        src="https://powerfit-bialystok.cms.efitness.com.pl/kalendarz-zajec"
        className="h-[90svh] w-full"
      />
    </>
  );
};

export default ClassSchedulePage;
