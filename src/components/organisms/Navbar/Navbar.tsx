import { Button } from "@/components/atoms/Button";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="fixed flex justify-center w-full py-12 px-5 z-50 text-white">
      <div className="container flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.svg" alt="Powerfit Logo" width={226} height={50} />
        </Link>

        <ul className="flex gap-12 text-sm">
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

        <Button>Kontakt</Button>
      </div>
    </nav>
  );
};
