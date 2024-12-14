import { projects } from "@/constants";
import ProjectCard from "./ProjectCard";

export default function ProjectsContainer() {

    return (
        <div className="flex justify-between w-full h-full mt-16">
            <div className="w-full h-full flex justify-center items-center gap-16 px-4 flex-wrap">
                { projects.map((project) => (
                    <ProjectCard key={ project.id } { ...project } />
                )) }
            </div>
        </div>
    )
}