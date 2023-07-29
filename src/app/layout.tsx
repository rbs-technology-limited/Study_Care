import AOSProvider from "@/Provider/AOSProvider/AOSProvider";
import "./globals.css";
import { Inter } from "next/font/google";
import React, { Suspense } from "react";
import Loading from "./loading";
import ContextProvider from "@/Context/ContextProvider";
import { NavigationEvents } from "@/Provider/navigation-events/navigation-events";
import ScrollToTop from "@/Shared/ScrollToTop/ScrollToTop";
import "react-tooltip/dist/react-tooltip.css";
import ReduxProvider from "@/Redux/ReduxProvider/ReduxProvider";

export const metadata = {
  title: "Study Care",
  description: "The best place to study online",
};

const inter = Inter({ subsets: ["latin"] });

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
        {/* <link rel="manifest" href="/manifest.json" /> */}
      </head>

      <body
        className={`${inter.className} relative dark:bg-dark-background dark:text-white`}
      >
        <ReduxProvider>
          <ContextProvider>
            <AOSProvider>
              <Suspense fallback={<Loading />}>
                <NavigationEvents>{children}</NavigationEvents>
              </Suspense>
            </AOSProvider>
          </ContextProvider>
        </ReduxProvider>
        <ScrollToTop />
      </body>
    </html>
  );
}
