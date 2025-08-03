"use client";
import React, { useState } from "react";
import { I_About } from "@/types/project";
import { bricolage_grotesque } from "@/utils/fonts";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Badge, Separator } from "@radix-ui/themes";
import Title from "@/components/ui/Title";

const About = () => {
	const [isMore, setIsMore] = useState<boolean>(true);
	return (
		<div className="w-full px-64 max-[1285px]:px-52 max-lg:px-4 max-sm:px-5 flex flex-col items-center mt-4 pb-8">
			<Title title="The Evolution of My Tech Journey" />

			<div className="w-full pl-36 pr-28 max-sm:px-2">
				{data.slice(0, 4).map((item, idx) => (
					<div key={idx}>
						<h1
							className={`text-2xl max-sm:text-xl mt-8 font-medium ${bricolage_grotesque}`}
						>
							{item.year}
						</h1>
						<div className="flex pl-2 mt-4">
							<div className={`w-full flex flex-col gap-3`}>
								{item.events.map((event, idx) => (
									<div
										key={idx}
										className={`flex items-center gap-2 ${bricolage_grotesque}`}
									>
										<span>
											<Separator
												orientation="horizontal"
												size="1"
												className="w-8 bg-black dark:bg-gray-400"
											/>
										</span>
										<span className="text-[15px] max-sm:text-sm dark:text-[#dfdede]">
											{event}
										</span>
									</div>
								))}
							</div>
						</div>
					</div>
				))}

				<div
					className={`flex justify-center mt-5 ${
						isMore ? "hidden" : "block"
					}`}
				>
					<Badge
						color="gray"
						variant="solid"
						highContrast
						onClick={() => setIsMore(true)}
						className={`text-xs max-sm:text-[10px] w-20 flex items-center text-center dark:hover:bg-gray-300 py-1 px-2 cursor-pointer hover:bg-gray-800 ${bricolage_grotesque}`}
					>
						<span>See More</span>
						<span className="!ml-[-3px] mt-[1px]">
							<ChevronDownIcon className="h-3 w-3 dark:!text-black !text-white  shrink-0 text-muted-foreground transition-transform duration-200" />
						</span>
					</Badge>
				</div>

				{isMore &&
					data.slice(3).map((item, idx) => (
						<div key={idx}>
							<h1
								className={`text-2xl mt-8 font-medium ${bricolage_grotesque}`}
							>
								{item.year}
							</h1>
							<div className="flex pl-2 mt-4">
								<div
									className={`w-full flex flex-col gap-3 ${bricolage_grotesque}`}
								>
									{item.events.map((event, idx) => (
										<div
											key={idx}
											className={`flex items-center gap-2 ${bricolage_grotesque}`}
										>
											<span>
												<Separator
													orientation="horizontal"
													size="1"
													className="w-8 bg-black dark:bg-gray-400"
												/>
											</span>
											<span className="text-[15px] dark:text-[#dfdede]">
												{event}
											</span>
										</div>
									))}
								</div>
							</div>
						</div>
					))}

				<div
					className={`flex justify-center mt-5 ${
						isMore ? "block" : "hidden"
					}`}
				>
					<Badge
						color="gray"
						variant="solid"
						highContrast
						onClick={() => setIsMore(false)}
						className={`text-xs max-sm:text-[10px] w-20 flex items-center text-center dark:hover:bg-gray-300 py-1 px-2 cursor-pointer hover:bg-gray-800 ${bricolage_grotesque}`}
					>
						<span>See Less</span>
						<span className="!ml-[-3px] mt-[1px]">
							<ChevronDownIcon className="rotate-180 h-3 w-3 dark:!text-black !text-white shrink-0 text-muted-foreground transition-transform duration-200" />
						</span>
					</Badge>
				</div>
			</div>
		</div>
	);
};

export default About;

const data: I_About[] = [
	{
		year: 2025,
        events: ["Learning, building, and writing code."],
	},
	{
		year: 2024,
		events: [
			"Closed one chapter by graduating high school, but opened a far bigger one : My journey into Technology 🔥. I Got admitted to a BTech CSE program 😃, finally stepping into the world I once only dreamed of.",
			"For the first time, I wasn’t just studying for exams—I was building for fun, learning for passion, and growing into the engineer. My days were for classes, but my nights were for creation. My nights were spent in a joyful trance, painting with pixels and architecting with code, a passion I gladly embraced. ",
		],
	},
	{
		year: 2022,
		events: [
			"As our financial situation stabilized, I grabbed the second chance life gave me. I Enrolled back in high school with a burning desire 🔥 to reclaim my lost dream. Every chapter, every class felt like a step closer to becoming the software engineer I once thought I’d never be.",
		],
	},

	{
		year: 2020,
		events: [
			"Completed 10th 🎓 grade with 82%.",
			"Lockdown shattered our finances. I had to put my dream of becoming a software engineer on hold😭. Stepped into the real world at 17, working full-time to support my family and survive 💪.",
		],
	},
	{
		year: 2019,
		events: [
			"Like any curious engineer, I spent my teenage years exploring, tinkering, and experimenting with technology.",
			"Engineered my first DIY tech project—a motorcycle-style brake light system on my bicycle. It was scrappy, clunky, but absolutely fun.",
		],
	},
	{
		year: 2017,
		events: [
			"Discovered computers for the first time in a cyber cafe 💻 , my gateway into the digital world. ",
			"At the time, I only saw computers as gaming machines, but little did I know it would become my future.",
		],
	},
	{
		year: 2015,
		events: [
			"Started watching cricket and became an instant fan of a young Virat Kohli, sparking my passion for the sport.",
		],
	},
	{
		year: 2003,
		events: [
			"The year I was born, the first future software engineer in the family! 👶🏼 🍼",
		],
	},
];
