"use client";

import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import MenuIcon from "@/public/icons/menu-icon.svg"
import XIcon from "@/public/icons/x-icon.svg"

export default function MobileNavbar() {

    const [isNavbarOpened, setIsNavbarOpened] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {

            if (isNavbarOpened) {
                document.body.classList.add("overflow-y-hidden");
            } else {
                document.body.classList.remove("overflow-y-hidden");
            }
        }
    }, [isNavbarOpened]);

    return (
        // <AnimatePresence>
        <nav>
            <div
                className="md:hidden cursor-pointer"
                onClick={ () => setIsNavbarOpened(prev => !prev) }
            >
                <Image src={ MenuIcon } width={ 32 } height={ 32 } alt="menu" />
            </div>

            { isNavbarOpened && (
                // <motion.div
                //     initial={ { y: -100, opacity: 0 } }
                //     animate={ isNavbarOpened ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 } }
                //     exit={ { y: -100, opacity: 0 } }
                //     transition={ { duration: 0.1688 } }
                //     className=
                // >
                <div
                    className={ `fixed top-0 left-0 right-0 bg-white shadow-lg ${isNavbarOpened ? "block" : "hidden"} h-screen` }
                >
                    <div
                        className="absolute right-0 p-6 "
                        onClick={ () => setIsNavbarOpened(false) }
                    >
                        <Image
                            src={ XIcon }
                            width={ 48 }
                            height={ 48 }
                            alt="close"
                            className="cursor-pointer"
                        />
                    </div>

                    <ul className="flex flex-col items-center justify-center h-full gap-10 py-[.5rem]">
                        { NavLinks.map((link, i) => (
                            <li key={ i } className="w-full flex text-center hover:bg-[#E3E3E3] py-4 transition-colors">
                                <Link
                                    href={ link.href }
                                    className="w-full font-sans text-4xl text-black hover:text-[#4D4D4D] transition-colors font-bold"
                                    onClick={ () => setIsNavbarOpened(false) }
                                >{ link.name }</Link>
                            </li>
                        )) }
                    </ul>
                </div>
                // </motion.div>
            ) }
            {/* </AnimatePresence> */ }
        </nav >
    )
}