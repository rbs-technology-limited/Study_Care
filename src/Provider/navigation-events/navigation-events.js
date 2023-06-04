"use client";
import { usePathname } from "next/navigation";

export function NavigationEvents({ children }) {
  const pathname = usePathname();

  return (
    <>
      {pathname === "/login" || pathname === "/signup" ? null : null}
      {children}
      {pathname === "/login" || pathname === "/signup" ? null : null}
    </>
  );
}
