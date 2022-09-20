import Link from "next/link";
import { Activity, ArrowLeft, Atom } from "phosphor-react";
import React, { ReactNode, useState } from "react";
import links from "../../data/menus.json";
interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  return (
    <div className="flex">
      <div
        className={`relative h-screen bg-slate-800 p-5 pt-8 duration-300 ${
          isMenuOpen ? "w-72" : "w-24"
        }`}
      >
        <ArrowLeft
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          size={40}
          color="rgb(30 41 59"
          className={`absolute -right-5 top-9 cursor-pointer rounded-full border border-slate-900 bg-white p-1 ${
            isMenuOpen ? "" : "rotate-180"
          }`}
        />

        <div className="mt-2 inline-flex">
          <Activity size={38} color="#ffffff" />
          <h2
            className={`origin-left text-2xl tracking-widest text-white duration-300 ${
              !isMenuOpen && "scale-0"
            }`}
          >
            Claudio/&#62;
          </h2>
        </div>
        <ul>
          {links.map((link, index) => (
            <>
              <li
                key={index}
                className="flex items-center text-sm gap-x-4 rounded-md p-2 text-slate-300 hover:bg-slate-500 "
              >
                <span>
                  <Atom size={26} color="#ffffff" weight="light" />
                </span>
                <Link href={link.href}>{link.name}</Link>
              </li>
            </>
          ))}
        </ul>
      </div>
      <main className="w-full">{children}</main>
    </div>
  );
}
