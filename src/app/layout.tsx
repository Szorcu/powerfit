import type { Metadata } from "next";
import { Navbar } from "@/components/organisms/Navbar";
import "./globals.css";
import localFont from "next/font/local";
import clsx from "clsx";

export const metadata: Metadata = {
  title: "Power Fit - siłownia i klub fitness Białystok",
  description:
    "Poznaj Power Fit – nową siłownię z pozytywnym klimatem i trenerami, którzy rozumieją, że forma to proces, nie wyścig.",
};

const zalandoFont = localFont({
  src: [
    {
      path: "./fonts/zalando-sans-expanded-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/zalando-sans-expanded-600.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-zalando",
});

const poppinsFont = localFont({
  src: [
    {
      path: "./fonts/poppins-regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={clsx(zalandoFont.variable, poppinsFont.variable)}
    >
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
