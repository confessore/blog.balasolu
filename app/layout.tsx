import Link from "next/link";
import "./globals.css";
import { Akshar } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@/components/analytics";
import { ModeToggle } from "@/components/mode-toggle";
import Script from "next/script";

const akshar = Akshar({ subsets: ["latin"] });

export const metadata = {
  title: "Balanced Solutions Software - Seamless Development and Hosting Solutions for Web, Mobile, and Desktop Applications",
  description: "We shall handle the nerd stuff. Elevate your digital presence with our expert development and hosting services. From web to mobile to desktop, we deliver tailored solutions for optimal performance.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-50 ${akshar.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="mx-auto max-w-2xl px-4 py-10">
            <header>
              <div className="flex items-center justify-between">
                <ModeToggle />
                <nav className="ml-auto space-x-6 text-sm font-medium">
                  <Link href="/">Home</Link>
                  <Link href="/about">About</Link>
                </nav>
              </div>
            </header>
            <main>{children}</main>
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
      <>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
        />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
        `}
        </Script>
      </>
    </html>
  );
}
