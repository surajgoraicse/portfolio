"use client";

import { Project } from "@/types/project";
import { bricolage_grotesque } from "@/utils/fonts";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Badge } from "@radix-ui/themes";
import { useState } from "react";
import ProjectCard from "./ProjectCard";

const ProjectList = ({ data }: { data: Project[] }) => {
	const [visibleProjects, setVisibleProjects] = useState(6);

	const loadMoreProjects = () => {
		setVisibleProjects((prev) => data.length);
	};

	return (
		<div className="w-full h-fit px-4 sm:px-6 lg:px-16 xl:px-24 flex flex-col items-center pb-8 justify-center">
			<div className="w-full flex flex-col gap-6 md:flex-row flex-wrap items-center mt-4 justify-center">
				{data
					.slice(0, visibleProjects)
					.map((project: Project, idx: number) => (
						<ProjectCard
							key={idx}
							logo={project.logo}
							title={project.title}
							description={project.description}
							techStack={project.techStack}
							link={project.link}
							source={project.source}
						/>
					))}
			</div>
			{visibleProjects < data.length && (
				<Badge
					color="gray"
					variant="solid"
					highContrast
					onClick={loadMoreProjects}
					className={`text-xs max-sm:text-[10px] flex items-center text-center dark:hover:bg-gray-300 py-1 px-2 cursor-pointer hover:bg-gray-800 mt-6 ${bricolage_grotesque}`}
				>
					<span>Load More</span>
					<span className="!ml-[-3px] mt-[1px]">
						<ChevronDownIcon className="h-3 w-3 dark:!text-black !text-white  shrink-0 text-muted-foreground transition-transform duration-200" />
					</span>
				</Badge>
			)}
		</div>
	);
};

export default ProjectList;
