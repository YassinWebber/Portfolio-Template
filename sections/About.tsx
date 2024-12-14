import AboutWrapper from "@/components/AboutWrapper";
import Heading from "@/components/Heading";

export default function About() {
    // const aboutMeDescription = `👋 Hello! I’m [Your Name], a 17-Year-Old Software Engineer.

    // I'm a passionate software developer with a knack for building impactful digital experiences and solving real-world problems. With over 2 years of coding experience, I've honed my skills in technologies like JavaScript, TypeScript, React, and Node.js, along with a solid foundation in data structures and algorithms.

    // Throughout my journey, I’ve created several full-stack projects, developed small-scale applications, and even contributed to open-source projects. Each project has strengthened my problem-solving mindset and deepened my curiosity for understanding how technology works.

    // Outside of coding, I'm interested in exploring AI, contributing to open-source communities, and connecting with other developers to learn and grow. I’m constantly excited to take on new challenges and further develop my technical skills. If you're interested in collaborating, feel free to reach out!`;

    return (
        <section
            id="about"
            className="flex justify-center items-center flex-col pt-16"
        >
            <Heading title="About Me" subTitle="Learn more about me!" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque cumque consectetur aut nemo totam voluptatem accusantium praesentium architecto, atque saepe incidunt eligendi, et fugiat? Ex?" />

            <div className="w-full mt-16 max-w-[1200px]">

                <AboutWrapper />
            </div>
        </section>

    )
}