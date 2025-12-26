import Image from "next/image";
import { PageHeaderProps } from "./PageHeader.types";
import {
  BreadcrumbItem,
  BreadcrumbPage,
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/atoms/Breadcrumb";
import Link from "next/link";

export const PageHeader = ({
  title,
  crumbLabel,
  bgImageSrc,
}: PageHeaderProps) => {
  return (
    <section className="relative h-[40svh]">
      <div className="absolute right-0 h-full w-[60%]">
        <Image
          className="object-cover object-top"
          src={bgImageSrc ?? "page-header-1.jpg"}
          alt=""
          fill
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(89.79deg,#222222_43.71%,rgba(34,34,34,0)_99.82%)]" />

      <div className="absolute bottom-0 left-1/2 container -translate-x-1/2 pb-24 text-white">
        <Breadcrumb className="mb-12">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Strona główna</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{crumbLabel}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className="font-normal">{title}</h1>
      </div>
    </section>
  );
};
