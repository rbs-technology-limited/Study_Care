import AOSProvider from "@/Provider/AOSProvider/AOSProvider";
import "./globals.css";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import Loading from "./loading";
import ContextProvider from "@/Context/ContextProvider";
import { NavigationEvents } from "@/Provider/navigation-events/navigation-events";
import ScrollToTop from "@/Shared/ScrollToTop/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: Props): React.ReactElement<Props> {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        <AOSProvider>
          <Suspense fallback={<Loading />}>
            <ContextProvider>
              <NavigationEvents>
                {/* <Header /> */}
                {children}
                {/* <Footer /> */}
              </NavigationEvents>
            </ContextProvider>
          </Suspense>
          <ScrollToTop />
        </AOSProvider>
      </body>
    </html>
  );
}