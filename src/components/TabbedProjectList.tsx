"use client";

import ProjectCardList from "@/app/projects/components/ProjectCardList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { backendProjects, fullstackProjects } from "@/utils/constant";

const TabbedProjectList = () => {
	return (
		<div className="w-full">
			<Tabs defaultValue="backend" className="w-full">
				<div className="flex justify-center mb-8 max-sm:mb-4 max-sm:px-2">
					<TabsList className="w-full max-w-lg max-sm:max-w-4xl bg-white bg-opacity-10 backdrop-blur-lg border dark:border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-1">
						<TabsTrigger
							value="fullstack"
							className="text-xs sm:text-sm data-[state=active]:bg-white/20"
						>
							Full Stack Projects
						</TabsTrigger>
						<TabsTrigger
							value="backend"
							className="text-xs sm:text-sm data-[state=active]:bg-white/20"
						>
							Backend Projects
						</TabsTrigger>
					</TabsList>
				</div>

				<TabsContent value="fullstack" className="mt-0">
					<ProjectCardList data={fullstackProjects} />
				</TabsContent>

				<TabsContent value="backend" className="mt-0">
					<ProjectCardList data={backendProjects} />
				</TabsContent>
			</Tabs>
		</div>
	);
};

export default TabbedProjectList;
