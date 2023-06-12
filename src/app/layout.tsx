/* eslint-disable @next/next/no-page-custom-font */
import AOSProvider from "@/Provider/AOSProvider/AOSProvider";
import "./globals.css";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import Loading from "./loading";
import ContextProvider from "@/Context/ContextProvider";
import { NavigationEvents } from "@/Provider/navigation-events/navigation-events";
import ScrollToTop from "@/Shared/ScrollToTop/ScrollToTop";
const inter = Inter({ subsets: ["latin"] });
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "Study Care",
  description: "The best place to study online",
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: Props): React.ReactElement<Props> {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
      </head>

      <body
        className={`${inter.className} relative dark:bg-dark-background dark:text-white`}
      >
        <AOSProvider>
          <NavigationEvents>
            <Suspense fallback={<Loading />}>
              <ContextProvider>{children}</ContextProvider>
            </Suspense>
            <ScrollToTop />
          </NavigationEvents>
        </AOSProvider>
      </body>
    </html>
  );
}
