import Link from "next/link";
import "./globals.css";
import { Akshar } from "next/font/google";
import GoogleAnalytics from "@/components/google_analytics";
import MainWrapper from "@/components/main_wrapper";
import Backdrop from "@/components/backdrop";
import Overlay from "@/components/overlay";

const akshar = Akshar({ subsets: ["latin"] });

export const metadata = {
  title:
    "Balanced Solutions Software - Seamless Development and Hosting Solutions for Web, Mobile, and Desktop Applications",
  description:
    "We shall handle the nerd stuff. Elevate your digital presence with our expert development and hosting services. From web to mobile to desktop, we deliver tailored solutions for optimal performance.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={akshar.className}>
        <MainWrapper>
          <Overlay />
          <Backdrop>
            <header>
              <div className="flex items-center justify-between">
                <nav className="ml-auto space-x-6 text-sm font-medium">
                  <a href="https://balasolu.com">Home</a>
                  <Link href="/">Blog</Link>
                </nav>
              </div>
            </header>
            {children}
          </Backdrop>
        </MainWrapper>
      </body>
      <GoogleAnalytics />
    </html>
  );
}
