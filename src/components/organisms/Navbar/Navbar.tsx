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
          ? "border-white/10 bg-[#222222]/50 py-3 shadow-md backdrop-blur-md xl:py-4"
          : "border-transparent bg-transparent py-6 xl:py-12",
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image
            className="h-10 w-auto xl:h-[50px]"
            src="/logo-full.svg"
            alt="Powerfit Logo"
            width={170}
            height={40}
          />
        </Link>

        <ul className="hidden xl:flex xl:gap-12 xl:text-sm">
          <li>
            <Link href="o-nas">o nas</Link>
          </li>
          <li>
            <Link href="grafik">grafik zajęć</Link>
          </li>
          <li>
            <Link href="zajecia-i-uslugi">opis zajęć i usług</Link>
          </li>
          <li>
            <Link href="cennik">cennik</Link>
          </li>
          <li>
            <Link href="trenerzy">trenerzy</Link>
          </li>
          <li>
            <Link href="galeria">galeria</Link>
          </li>
        </ul>

        <Button className="hidden xl:block">Kontakt</Button>

        <Menu className="block xl:hidden" size={24} />
      </div>
    </nav>
  );
};
