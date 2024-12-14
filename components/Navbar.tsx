import { NavLinks } from "@/constants";
import Link from "next/link";
import MobileNavbar from "@/components/MobileNavbar";
import Button from "./Button";

export default function Navbar() {
  return (
    <header className="w-full h-[58px] flex items-center justify-between max-lg:px-8 px-24 bg-white fixed z-50 shadow-lg">
      <div className="-mt-2">
        <Link href={"/"} className="font-extrabold font-aref text-3xl">
          Mashaly
        </Link>
      </div>
      <ul className="hidden md:flex gap-12 max-lg:gap-8 list-none">
        {NavLinks.map((link, i) => (
          <li key={i} className="">
            <Link
              href={link.href}
              className="text-slate-800 font-medium hover:text-slate-600 transition text-sm"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-4">
        <Button
          label="Download CV"
          primary="black"
          secondry="white"
          className="max-[400px]:hidden"
        />
        <MobileNavbar />
      </div>
    </header>
  );
}
