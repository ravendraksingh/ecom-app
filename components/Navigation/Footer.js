import { Home, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-[#001446] text-white pt-[1rem] pb-[1rem]">
      <div className="flex flex-col gap-3 md:flex-row justify-between px-5 md:px-[5rem]">
        {/* left */}
        <div>
          <p className="text-2xl font-semibold mb-3">Quick Links</p>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/orders">Orders</Link>
            </li>
            <li>
              <Link href="/cart">Cart</Link>
            </li>
          </ul>
        </div>
        {/* center */}
        <div>
          <p className="text-2xl font-semibold pb-3">Niyava Services</p>
          <ul className="list-none">
            <li>
              <Link
                href="https://niyava.com/service/it-consulting-services"
                target="_blank"
              >
                IT Consulting
              </Link>
            </li>
            <li>
              <Link
                href="https://niyava.com/service/web-development-services"
                target="_blank"
              >
                Web Development & Design
              </Link>
            </li>
            <li>
              <Link
                href="https://niyava.com/service/software-development-services"
                target="_blank"
              >
                Software Development
              </Link>
            </li>
            <li>
              <Link
                href="https://niyava.com/service/software-testing-services"
                target="_blank"
              >
                Software Testing
              </Link>
            </li>
            <li>
              <Link
                href="https://niyava.com/service/it-support"
                target="_blank"
              >
                IT Support
              </Link>
            </li>
            <li>
              <Link
                href="https://niyava.com/service/finacle-support-services"
                target="_blank"
              >
                Finacle Support & Customization
              </Link>
            </li>
          </ul>
        </div>
        {/* right */}
        <div>
          <ul className="list-none flex flex-row gap-3">
            <li>
              <Link
                href="https://www.linkedin.com/company/niyava/"
                target="_blank"
              >
                <Linkedin />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/niyavatech/"
                target="_blank"
              >
                <Instagram />
              </Link>
            </li>
            <li>
              <Link href="https://x.com/NiyavaTech" target="_blank">
                <Twitter />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className="my-[1rem]" />
      <div className="text-center">
        <p className="text-xl">
          &copy;{" 2025 "}
          <Link href="https://niyava.com" target="_blank" className="underline">
            Niyava Technologies.
          </Link>
          <span> All rights reserved.</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
