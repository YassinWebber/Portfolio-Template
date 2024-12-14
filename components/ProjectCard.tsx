"use client";

import Image from 'next/image'

import ProjectImage from '@/public/images/project.jpg'
import Link from 'next/link'
import { Key } from 'react';

export default function ProjectCard(
    {
        title,
        id,
    }: {
        title: string;
        id: Key;
    }
) {

    return (
        <div
            className="flex flex-col gap-4"
        >
            <div className="relative overflow-hidden aspect-video max-w-[400px] max-h-[250px] rounded-3xl cursor-pointer">
                <Link href={ `/project-details/${id}` } className="inset-0" />
                <Image src={ ProjectImage } width={ 400 } height={ 250 } alt={ "ProjectImage" } className="select-none" />
                <div className="absolute top-2 left-2 bg-black text-white px-3 py-1 rounded-full font-bold">
                    New
                </div>
            </div>
            <div className="flex flex-col">
                <p className="text-slate-600 text-base font-medium">2 days ago</p>
                <Link href={ `/project-details/${id}` } className="sm:text-xl text-lg font-semibold max-w-[400px] cursor-pointer">{ title }</Link>
            </div>
        </div>
    )
}