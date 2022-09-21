import Link from "next/link";
import { Activity, ArrowLeft, Atom, CaretDown } from "phosphor-react";
import React, { ReactNode, useState } from "react";
import { Menus } from "../../data/menus";

export function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  return (
    <div className="flex">
      <div
        className={`relative h-screen bg-slate-800 p-5 pt-8 duration-300 ${
          isMenuOpen ? "w-72" : "w-[87px]"
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
          <Link href="/">
            <a
              className={`origin-left text-2xl tracking-widest text-white duration-300 ${
                !isMenuOpen && "scale-0"
              }`}
            >
              Claudio/&#62;
            </a>
          </Link>
        </div>
        <ul>
          {Menus.map((menu, index) => (
            <>
              <li
                key={index}
                className={`flex items-center gap-x-4 rounded-md p-2 text-sm text-slate-300 hover:bg-slate-500 ${
                  menu.spacing ? "mt-9" : "mt-2"
                }`}
              >
                <span className="">
                  {menu.icon ? menu.icon : <Atom size={26} />}
                </span>
                <span
                  className={`flex-1 font-medium duration-300 ${
                    !isMenuOpen && "hidden"
                  }`}
                >
                  {menu.title}
                </span>
                {menu.submenu && isMenuOpen && (
                  <CaretDown
                    className={`${isSubMenuOpen && "rotate-180"}`}
                    size={20}
                    color="#ffffff"
                    weight="light"
                    onClick={() => {
                      setIsSubMenuOpen(!isSubMenuOpen);
                    }}
                  />
                )}
              </li>
              {menu.submenu && isSubMenuOpen && isMenuOpen && (
                <ul>
                  {menu.submenuItems.map((submenuItem, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-x-4 rounded-md p-2 px-12 text-sm text-slate-300 hover:bg-slate-500"
                    >
                      <Link href={submenuItem.link}>{submenuItem.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </>
          ))}
        </ul>
      </div>
      <main className="w-full">{children}</main>
    </div>
  );
}
