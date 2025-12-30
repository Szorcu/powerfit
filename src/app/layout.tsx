import type { Metadata } from "next";
import { Navbar } from "@/components/organisms/Navbar";
import "./globals.css";
import localFont from "next/font/local";
import clsx from "clsx";
import { Footer } from "@/components/organisms/Footer";
import { ContactSection } from "@/components/organisms/ContactSection";
import Image from "next/image";
import { Toaster } from "@/components/atoms/Sonner";
import { TestimonialsSection } from "@/components/organisms/TestimonialsSection";
import GAPageView from "./ga-pageview";
import Script from "next/script";
import { GA_TRACKING_ID } from "@/consts/googleAnalytics";

export const metadata: Metadata = {
  title: "Power Fit | Siłownia i klub fitness Białystok",
  description:
    "Poznaj Power Fit – nową siłownię z Białegostoku z pozytywnym klimatem i trenerami, którzy rozumieją, że forma to proces, nie wyścig.",
};

const zalandoFont = localFont({
  src: [
    {
      path: "./fonts/zalando-sans-expanded-400.woff2",
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
      path: "./fonts/poppins-400.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/poppins-600.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/poppins-700.woff2",
      weight: "700",
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
      className={clsx(
        zalandoFont.variable,
        poppinsFont.variable,
        "scroll-smooth",
      )}
    >
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `}
        </Script>
      </head>
      <body className="antialiased">
        <GAPageView />
        <Toaster />

        <main>
          <Navbar />

          {children}

          <TestimonialsSection />
          <div className="relative z-0 bg-[#1E1E1E] pt-7 sm:pt-20">
            <div className="full absolute inset-0 z-[-1] h-1/3 sm:h-1/2 lg:h-full">
              <Image className="object-cover" src="footer-bg.jpg" alt="" fill />
              <div className="absolute inset-0 bg-[linear-gradient(181.56deg,rgba(30,30,30,0.8)_1.32%,#1E1E1E_88.65%)]" />
            </div>

            <ContactSection />
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
