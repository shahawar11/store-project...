"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { MdLocalPhone } from "react-icons/md"
import { Button } from "../ui/button"
import Logofinal from "./Logofinal"
import GoogleTranslate from "./GoogleTranslate"

const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false)
  const pathname = usePathname()

  const toggleNavbar = () => {
    setOpenNavbar((openNavbar) => !openNavbar)
  }

  const isActive = (path: string) => {
    return pathname === path ? "text-yellow-400 underline" : ""
  }

  return (
    <header className="absolute top-0 inset-0 h-24 flex items-center bg-white z-50 border shadow-lg">
      <div className="mx-auto lg:max-w-7xl w-full px-8 md:px-12 lg:px-12 h-full items-center">
        <nav className="flex justify-between items-center h-full">
          <Logofinal />
          <div
            className={`
              flex flex-col space-y-10 inset-0 fixed top-0 h-[100dvh] bg-white dark:bg-gray-950 lg:!bg-transparent py-20 px-4 md:px-8 2xl:px-16
              transition-all ease-linear duration-300 lg:flex-row lg:flex-1 lg:py-0 lg:px-0 lg:space-y-0 lg:gap-x-10 lg:relative lg:top-0 lg:h-full lg:items-center lg:justify-between lg:w-max
              ${
                openNavbar
                  ? "visible opacity-70 translate-y-0"
                  : "-translate-y-9 opacity-0 invisible lg:translate-y-0 lg:visible lg:opacity-100"
              }
            `}
          >
            <ul className="flex flex-col gap-y-5 text-black lg:items-center lg:flex-row lg:gap-x-5 lg:h-full lg:justify-center lg:flex-1">
              <li>
                <Link
                  href="/products"
                  className={`transition ease-linear hover:text-primary dark:hover:text-white ${isActive("/products")}`}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className={`transition ease-linear hover:text-primary dark:hover:text-white ${isActive("/services")}`}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`transition ease-linear hover:text-primary dark:hover:text-white ${isActive("/about")}`}
                >
                  About
                </Link>
              </li>
            </ul>
            <div>
              <GoogleTranslate />
            </div>
            <Link href="tel:+919488239034" className="inline-block ">
              <Button
                className="divide-x bg-yellow-100 text-black flex items-center p-2 hover:bg-primary hover:opacity-50 transition"
                aria-label="Contact us by phone"
              >
                <MdLocalPhone className="ml-2 text-lg" aria-hidden="true" />
                <span className="px-2">Contact Us</span>
              </Button>
            </Link>
          </div>
          <div className="flex items-center justify-end relative z-60 lg:hidden">
            <button
              onClick={toggleNavbar}
              className="p-3 rounded-full outline-none w-12 aspect-square flex flex-col relative justify-center items-center"
            >
              <span className="sr-only">Toggle Navbar</span>
              <span
                className={`w-6 h-0.5 rounded-full bg-black transition-transform duration-300 ease-linear ${
                  openNavbar ? "translate-y-1.5 rotate-[40deg]" : ""
                }`}
              />
              <span
                className={`w-6 origin-center mt-1 h-0.5 rounded-full bg-black transition-all duration-300 ease-linear ${
                  openNavbar ? "scale-x-0 opacity-0" : ""
                }`}
              />
              <span
                className={`w-6 mt-1 h-0.5 rounded-full bg-black transition-all duration-300 ease-linear ${
                  openNavbar ? "-translate-y-1.5 -rotate-[40deg]" : ""
                }`}
              />
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar

