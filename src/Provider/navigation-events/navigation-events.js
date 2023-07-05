"use client";
import Footer from "@/Global_Component/Footer/Footer";
import Header from "@/Global_Component/Header/Header";
import { usePathname } from "next/navigation";

export function NavigationEvents({ children }) {
  const pathname = usePathname();

  return (
    <>
      {pathname === "/login" ||
      pathname === "/signup" ||
      pathname === "/forgotPassword" ||
      pathname === "/changePassword" ||
      pathname === "/successRegister" ? null : (
        <Header />
      )}
      {children}
      {pathname === "/login" ||
      pathname === "/signup" ||
      pathname === "/forgotPassword" ||
      pathname === "/changePassword" ||
      pathname === "/successRegister" ? null : (
        <Footer />
      )}
    </>
  );
}
