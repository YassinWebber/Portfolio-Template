"use client";

import { btns } from "@/constants";
import { useState } from "react";
import AboutInfo from "./AboutInfo";
import MyMissionInfo from "./MyMissionInfo";

export default function AboutWrapper() {
    const [infoShown, setInfoShown] = useState('About')

    const isActive = (btn: string) => btn === infoShown ? true : false;

    return (
        <div className="w-full flex flex-col bg-[#f6f6f6] lg:px-12 px-10 py-6 rounded-3xl">
            <div className="flex w-full flex-1 justify-between ">
                { btns.map((btn, i) => (
                    <button key={ i } className={ `w-full py-4 border-b hover:border-gray-600  ${isActive(btn) ? "border-gray-400 text-black" : 'text-gray-600'} font-semibold` } onClick={ () => setInfoShown(btn) }>{ btn }</button>
                )) }
            </div>
            { infoShown === "About" ? <AboutInfo /> : (infoShown === "My Mission" ? <MyMissionInfo /> : null) }
        </div>
    )
}