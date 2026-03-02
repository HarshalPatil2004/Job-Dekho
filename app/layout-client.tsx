'use client'

import { ReactNode } from "react";
import Navbar from "./components/navbar";

type RootLayoutClientProps = {
  children: ReactNode;
};

export default function RootLayoutClient({ children }: RootLayoutClientProps) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}