"use client";
import Footer from "@/Global/Footer/Footer";
import Header from "@/Global/Header/Header";
import { usePathname } from "next/navigation";

export function NavigationEvents({ children }) {
  const pathname = usePathname();

  const endPointNames = [
    "/login",
    "/signup",
    "/forgotPassword",
    "/changePassword",
    "/successRegister",
    "/successPassword",
    "/signup/verify-otp",
    "/forgotPassword/verify-otp",
  ];

  const isPathNameValid = endPointNames.includes(pathname);

  return (
    <>
      {!isPathNameValid && <Header />}
      {children}
      {!isPathNameValid && <Footer />}
    </>
  );
}
