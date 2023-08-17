"use client";
import { NavProvider } from "@/context/NavContext";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <NavProvider>{children}</NavProvider>;
};
