import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import Logofinal from "./navbar/Logofinal";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 px-8 md:px-12  mt-24">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-between">
          {/* Logo and Company Name */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <Logofinal />
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Menu</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products"
                  className="hover:text-white transition-colors hover:underline"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors hover:underline"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors hover:underline"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/4 b-6 mb-6  md:mb-0 md:-ml-6">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <a
                  href="tel:+7550195506"
                  className="hover:text-white transition-colors"
                >
                  +91 - 75501-95506
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-1" />
                <span>
                  38, Parvathy Nagar 3rd St,
                  <br />
                  Chennai - 600073
                  <br />
                  Tamil Nadu, India
                </span>
              </li>
            </ul>
          </div>

          <div className="flex left-0  mx-auto md:hidden hover:text-white transition-colors  text-sm font-thin">
            <Link href="/PrivacyPolicy" className=" mr-1 ">
              <div className="underline">Privacy Policy</div>
            </Link>
            <div className=" ">|</div>

            <Link href="/TermsConditions" className=" ml-1 ">
              <span className="underline"> Terms & Conditions</span>
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="border-t border-gray-700 mt-8 pt-6 text-center md:flex md:justify-between mx-auto reverse-cols
        "
        >
          <div className=" text-sm font-thin ">
            &copy; 2024 vivasayi. All Rights Reserved.
          </div>
          <div
            className="md:right-0 text-center hidden hover:text-white transition-colors
        md:flex justify-between text-sm font-thin"
          >
            <Link href="#" className="mr-1">
              <div className="underline">
                <h1 className="">Privacy Policy</h1>
              </div>
            </Link>
            <div className=" ">|</div>

            <Link href="#" className="ml-1">
              <span className="underline">Terms & Conditions</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
