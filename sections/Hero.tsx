import Button from "@/components/Button";
import Image from "next/image";

import SinwarImage from "@/public/images/image.jpg";

export default function Hero() {
  const heading = {
    title: "Yahya Al-Sinwar",
    subTitle: "رجل في زمن قل فيه الرجال",
    description:
      " Wearing his war uniform, drawing his weapon, he was neither hiding nor fleeing nor surrounding himself with prisoners as the occupation promoted, but rather as a leader of fighters on the battlefield. This was the end that he wanted for himself and that his enemy did not want for him.",
  };

  return (
    <section className="relative h-[calc(100vh - 54px)] top-[32px]" id="home">
      <div className="-z-10 w-screen h-screen">
        <div className="inset-0 bg-black/50 w-full h-full pointer-events-none -z-50" />

        <Image
          src={SinwarImage}
          alt="main-image"
          quality="100"
          layout="fill"
          className="-z-50 object-cover pointer-events-none"
        />

        <div className="absolute top-0 text-center px-2 w-full h-full flex flex-col justify-center items-center">
          <h1
            className={`font-sans text-white font-bold sm:text-7xl text-5xl text-center`}
          >
            {heading.title}
          </h1>
          <h1
            className={`font-aref leading-12 text-white sm:text-7xl text-5xl`}
          >
            {heading.subTitle}
          </h1>
          <div
            className="text-center mt-8 max-sm:px-4"
            style={{ maxWidth: "900px" }}
          >
            <p
              className={`text-white text-wrap leading-6 max-sm:text-sm max-sm:leading-5  `}
            >
              {heading.description}
            </p>
          </div>
          <Button primary="white" label="Find out more!" className="mt-8" />
        </div>
      </div>
    </section>
  );
}
