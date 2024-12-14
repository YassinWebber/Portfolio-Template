import Image from 'next/image'

import AboutImage from '@/public/images/image-2.webp'

export default function AboutInfo() {

    return (
        <div className="mt-16 mb-8 flex flex-col lg:flex-row sm:items-start lg:gap-8 md:gap-6 gap-4">
            <div className="overflow-hidden rounded-tl-3xl rounded-bl-3xl">
                <Image src={ AboutImage } alt='About Image' height={ 500 } />
            </div>

            <div className="flex flex-col gap-8 max-lg:mt-8">
                <h1 className="text-5xl font-bold text-wrap">It&apos;s Me, Senior Yassin!</h1>
                <div className="flex flex-col gap-4 max-w-[565px]">
                    <p className="font-normal text-slate-500 text-wrap text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum sapien ac leo cursus dignissim. In ac lectus vel orci accumsan ultricies at in libero accumsan.
                    </p>
                    <p className="font-normal text-slate-500 text-wrap text-base">Phasellus ex massa, facilisis ac vestibulum eget, ultrices quis nulla. Integer vitae magna lacus. Sed venenatis auctor dolor.</p>
                    <p className="font-normal text-slate-500 text-wrap text-base">Phasellus ex massa, facilisis ac vestibulum eget, ultrices quis nulla. Integer vitae magna lacus. Sed venenatis auctor dolor.</p>
                </div>
            </div>
        </div>
    )
}