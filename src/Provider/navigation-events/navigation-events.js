"use client";
import Footer from "@/Global/Footer/Footer";
import Header from "@/Global/Header/Header";
import { usePathname } from "next/navigation";

export function NavigationEvents({ children }) {
  const pathname = usePathname();

  return (
    <>
      {pathname === "/login" ||
      pathname === "/signup" ||
      pathname === "/forgotPassword" ||
      pathname === "/changePassword" ||
      pathname === "/successRegister" ||
      pathname === "/successPassword" ? null : (
        <Header />
      )}
      {children}
      {pathname === "/login" ||
      pathname === "/signup" ||
      pathname === "/forgotPassword" ||
      pathname === "/changePassword" ||
      pathname === "/successRegister" ||
      pathname === "/successPassword" ? null : (
        <Footer />
      )}
    </>
  );
}
