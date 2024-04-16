import React from "react";
import logo from "@/assets/logo.png";
import { ModeToggle } from "@/components/mode-toggle";

export default function Navbar() {
  return (
    <>
      <div className="flex px-4 py-2 items-center justify-between">
        <picture>
          <img
            className="aspect-square w-16 rounded-full bg-transparent"
            src={logo}
            alt="src/assets/logo.png"
          />
        </picture>
        <ModeToggle />
      </div>
    </>
  );
}
