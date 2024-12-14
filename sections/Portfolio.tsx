import ProjectsContainer from "@/components/ProjectsContainer";
import Heading from "@/components/Heading";
import Button from "@/components/Button";

export default function Portfolio() {
    return (
        <section className="flex flex-col justify-center items-center pt-16" id="works">
            <div className="pb-16">
                <Heading
                    title="Portfolio"
                    subTitle="Gallery, Previews and Portfolio"
                    description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem aut possimus beatae corporis similique in minus vel cumque, temporibus repellat accusantium fuga repellendus fugit quae est voluptas necessitatibus placeat sequi amet laboriosam a velit. Vel!"
                />
            </div>
            <div className="text-center">
                <span className="text-base font-medium">Filter by:</span>
                <div className="p-[.3rem] rounded-full border-2 border-black mt-2 flex items-center gap-1">
                    <div className="bg-black rounded-full text-center py-[.2rem]">
                        <span className="text-sm font-bold text-white p-4 select-none cursor-pointer">All</span>
                    </div>
                    <div className="bg-white hover:bg-black rounded-full text-center py-[.2rem] transition-colors">
                        <span className="text-sm font-bold text-black hover:text-white p-4 select-none cursor-pointer transition-colors">Latest</span>
                    </div>
                </div>
            </div>
            <ProjectsContainer />
            <Button label="Show More" primary="black" secondry="white" className="mt-16" />
        </section >
    )
}