import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="z-10 flex w-full justify-center text-white">
      <div className="container flex flex-col gap-12 sm:flex-row md:gap-20 lg:gap-28 xl:gap-44">
        <div className="flex flex-col gap-4 sm:gap-6 lg:flex-row lg:items-start lg:gap-16 xl:gap-24 2xl:gap-44">
          <Image
            className="w-full max-w-56 shrink-0 2xl:max-w-72"
            src="logo-full.svg"
            alt="Power Fit logo"
            width={170}
            height={40}
          />

          <div className="flex flex-col gap-1 lg:gap-3">
            <a
              href="tel:+48690818690"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-zalando text-2xl font-semibold lg:text-3xl"
            >
              +48 690 818 690
            </a>

            <a
              className="text-2xl"
              href="mailto:recepcja.powerfit@wp.pl"
              target="_blank"
              rel="noopener noreferrer"
            >
              recepcja.powerfit@wp.pl
            </a>

            <div className="mt-4 flex items-center gap-3 lg:mt-6">
              <a
                href="https://www.facebook.com/Power-Fit-61576368675964/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.908 14.9036C10.827 14.9036 9.04497 14.9036 8.23497 14.9036C7.80297 14.9036 7.66797 14.7416 7.66797 14.3366C7.66797 13.2566 7.66797 12.1496 7.66797 11.0696C7.66797 10.6376 7.82997 10.5026 8.23497 10.5026H10.908C10.908 10.4216 10.908 8.85556 10.908 8.12656C10.908 7.04656 11.097 6.02056 11.637 5.07556C12.204 4.10356 13.014 3.45556 14.04 3.07756C14.715 2.83456 15.39 2.72656 16.119 2.72656H18.765C19.143 2.72656 19.305 2.88856 19.305 3.26656V6.34456C19.305 6.72256 19.143 6.88456 18.765 6.88456C18.036 6.88456 17.307 6.88456 16.578 6.91156C15.849 6.91156 15.471 7.26256 15.471 8.01856C15.444 8.82856 15.471 9.61156 15.471 10.4486H18.603C19.035 10.4486 19.197 10.6106 19.197 11.0426V14.3096C19.197 14.7416 19.062 14.8766 18.603 14.8766C17.631 14.8766 15.552 14.8766 15.471 14.8766V23.6786C15.471 24.1376 15.336 24.2996 14.85 24.2996C13.716 24.2996 12.609 24.2996 11.475 24.2996C11.07 24.2996 10.908 24.1376 10.908 23.7326C10.908 20.8976 10.908 14.9846 10.908 14.9036Z"
                    fill="white"
                  />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/powerfit_bialystok/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 2.08301H7C4.24 2.08301 2 4.41634 2 7.29134V17.708C2 20.583 4.24 22.9163 7 22.9163H17C19.76 22.9163 22 20.583 22 17.708V7.29134C22 4.41634 19.76 2.08301 17 2.08301ZM12 17.708C9.24 17.708 7 15.3747 7 12.4997C7 9.62467 9.24 7.29134 12 7.29134C14.76 7.29134 17 9.62467 17 12.4997C17 15.3747 14.76 17.708 12 17.708ZM17.35 7.93717C16.8 7.93717 16.35 7.46842 16.35 6.89551C16.35 6.32259 16.8 5.85384 17.35 5.85384C17.9 5.85384 18.35 6.32259 18.35 6.89551C18.35 7.46842 17.9 7.93717 17.35 7.93717Z"
                    fill="white"
                  />
                  <path
                    d="M12 15.625C13.6569 15.625 15 14.2259 15 12.5C15 10.7741 13.6569 9.375 12 9.375C10.3431 9.375 9 10.7741 9 12.5C9 14.2259 10.3431 15.625 12 15.625Z"
                    fill="white"
                  />
                </svg>
              </a>

              <a
                href="https://www.tiktok.com/@powerfitbialystok"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="22"
                  height="21"
                  viewBox="0 0 22 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.6387 5.26562C19.3832 5.26562 18.2248 4.86859 17.2945 4.19881C16.2276 3.431 15.461 2.30471 15.1903 1.00656C15.1233 0.68582 15.0872 0.354824 15.0837 0.015625H11.4971V9.37047L11.4928 14.4945C11.4928 15.8645 10.5583 17.026 9.26277 17.4345C8.88679 17.5531 8.48074 17.6093 8.05793 17.5871C7.51824 17.5588 7.0125 17.4034 6.57293 17.1524C5.6375 16.6183 5.00328 15.6495 4.98609 14.5413C4.95902 12.8092 6.42597 11.397 8.23925 11.397C8.59718 11.397 8.94093 11.4528 9.26277 11.5541V8.99723V8.07807C8.92332 8.03008 8.57785 8.00506 8.22851 8.00506C6.24378 8.00506 4.38753 8.79256 3.06066 10.2113C2.05777 11.2834 1.45621 12.6513 1.36339 14.0856C1.24179 15.9699 1.9641 17.761 3.36488 19.0826C3.5707 19.2766 3.78683 19.4566 4.01285 19.6227C5.21382 20.505 6.68207 20.9832 8.22851 20.9832C8.57785 20.9832 8.92332 20.9586 9.26277 20.9106C10.7074 20.7064 12.0403 20.0751 13.0921 19.0826C14.3846 17.8632 15.0988 16.2443 15.1065 14.5212L15.088 6.86934C15.7046 7.32338 16.3788 7.69908 17.1024 7.9907C18.2278 8.44392 19.421 8.67361 20.6491 8.6732V6.18725V5.2648C20.6499 5.26562 20.6396 5.26562 20.6387 5.26562Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="flex gap-16 text-sm sm:gap-8 md:gap-16 xl:gap-24 2xl:gap-36">
          <nav>
            <ul className="flex flex-col gap-3">
              <li>
                <Link className="link" href="/">
                  strona główna
                </Link>
              </li>
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
                <Link className="link" href="galeria">
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
          </nav>

          <ul className="flex flex-col gap-3">
            <li>
              <Link className="link" href="polityka-prywatnosci">
                polityka prywatności
              </Link>
            </li>
            <li>
              <Link className="link" href="regulamin">
                regulamin
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
