"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/atoms/Button";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

export const Navbar = () => {
  const [isStick, setIsStick] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsStick(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 flex w-full justify-center border-b text-white transition-[padding,background-color,backdrop-filter,border-color,box-shadow] duration-300 ease-in-out",
        isStick
          ? "border-white/20 bg-[#222222]/30 py-3 shadow-md backdrop-blur-md xl:py-4"
          : "border-transparent bg-transparent py-6 xl:py-12",
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image
            className="h-10 w-auto xl:h-[50px]"
            src="logo-full.svg"
            alt="Power Fit logo"
            width={170}
            height={40}
          />
        </Link>

        <ul className="hidden xl:flex xl:gap-12 xl:text-sm">
          <li>
            <Link className="link" href="o-nas">
              o nas
            </Link>
          </li>
          <li>
            <a
              className="link"
              href="https://powerfit-bialystok.cms.efitness.com.pl/kalendarz-zajec"
              target="_blank"
              rel="noopener noreferrer"
            >
              grafik zajęć
            </a>
          </li>
          <li>
            <Link className="link" href="zajecia-i-uslugi">
              oferta
            </Link>
          </li>
          <li>
            <Link className="link" href="cennik">
              cennik
            </Link>
          </li>
          <li>
            <Link className="link" href="trenerzy">
              trenerzy
            </Link>
          </li>
        </ul>

        <Button className="hidden xl:block" asChild>
          <Link href="#kontakt">Kontakt</Link>
        </Button>

        <Menu className="block xl:hidden" size={24} />
      </div>
    </nav>
  );
};
