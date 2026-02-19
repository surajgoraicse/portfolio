"use client";

import { useDarkMode } from "@/hooks/useDarkMode";
import {
	FileIcon,
	GitHubLogoIcon,
	HomeIcon,
	LinkedInLogoIcon,
	MoonIcon,
	SunIcon,
} from "@radix-ui/react-icons";
import { Separator, Tooltip } from "@radix-ui/themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
	const { isDarkMode, toggleDarkMode } = useDarkMode();
	const pathname = usePathname();

	return (
		<nav className="w-full py-6 flex justify-center fixed top-0 z-50">
			<div className="rounded-full w-[850px] max-lg:w-[800px] max-[400px]:w-[345px] max-[450px]:w-[400px] max-[350px]:w-[330px] max-[321px]:w-[310px] px-2 py-1 bg-white bg-opacity-10 backdrop-blur-lg border dark:border-white/20 flex items-center justify-center dark:shadow-none shadow">
				<div className="flex justify-center px-2 items-center max-sm:gap-4 gap-8 max-[400px]:gap-4 max-[450px]:gap-5 transition-all">
					<Link href="/">
						<Tooltip content="Home">
							<div className="hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all duration-300">
								<HomeIcon
									className={`w-[19px] h-[19px] max-sm:w-[15px] max-sm:h-[15px] text-black dark:text-white ${pathname == "/" ? "dark:!text-[#FFC83D] !text-[#cc9e2b]" : ""}`}
								/>
							</div>
						</Tooltip>
					</Link>

					<Link href="/projects">
						<Tooltip content="Projects">
							<div className="hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all duration-300">
								<svg
									className="w-[24px] h-[24px] max-sm:w-[15px] max-sm:h-[15px] text-black dark:text-white"
									viewBox="0 0 32 32"
									fill="currentColor"
									xmlns="http://www.w3.org/2000/svg"
								>
									{/* Right bracket > */}
									<path d="M30 16L21 23V20.466L26.742 16L21 11.534V9L30 16Z" />

									{/* Left bracket < */}
									<path d="M11 20.466L5.258 16L11 11.534V9L2 16L11 23V20.466Z" />

									{/* Slash / */}
									<path d="M17.8 9L11.8 23H14L20 9H17.8Z" />
								</svg>
							</div>
						</Tooltip>
					</Link>
					<Link
						href="https://leetcode.com/u/surajgoraicse/"
						target="_blank"
					>
						<Tooltip content="Leetcode">
							<div className="hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all duration-300">
								<svg
									className="w-[19px] h-[19px] max-sm:w-[15px] max-sm:h-[15px] text-black dark:text-white"
									viewBox="0 0 24 24"
									fill="currentColor"
								>
									<path d="m15.42 16.94-2.25 2.17a2.1 2.1 0 0 1-1.52.56 2.1 2.1 0 0 1-1.52-.56l-3.61-3.63a2.18 2.18 0 0 1-.58-1.55 2.07 2.07 0 0 1 .58-1.52l3.6-3.65a2.1 2.1 0 0 1 1.53-.54 2.08 2.08 0 0 1 1.52.55l2.25 2.17A1.14 1.14 0 0 0 17 9.33l-2.17-2.2a4.24 4.24 0 0 0-2-1.12l2.06-2.08a1.15 1.15 0 0 0-1.62-1.62l-8.43 8.42a4.48 4.48 0 0 0-1.24 3.2 4.57 4.57 0 0 0 1.24 3.23l3.63 3.63A4.38 4.38 0 0 0 11.66 22a4.45 4.45 0 0 0 3.2-1.25L17 18.56a1.14 1.14 0 0 0-1.61-1.62z" />
									<path d="M19.34 12.84h-8.45a1.12 1.12 0 0 0 0 2.24h8.45a1.12 1.12 0 0 0 0-2.24" />
								</svg>
							</div>
						</Tooltip>
					</Link>

					{/* <Link href="/blogs">
						<Tooltip content="Blog">
							<div className="hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all duration-300">
								<RowsIcon
									className={`w-[16px] h-[16px] max-sm:w-[13px] max-sm:h-[13px] text-black dark:text-white ${pathname.startsWith("/blogs") ? "dark:!text-[#FFC83D] !text-[#cc9e2b]" : ""}`}
								/>
							</div>
						</Tooltip>
					</Link> */}

					{/* <Link href="/about">
						<Tooltip content="About">
							<div className="hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all duration-300">
								<IoPerson
									className={`w-[18px] h-[18px] max-sm:w-[15px] max-sm:h-[15px] text-black dark:text-white ${pathname == "/about" ? "dark:!text-[#FFC83D] !text-[#cc9e2b]" : ""}`}
								/>
							</div>
						</Tooltip>
					</Link> */}

					<Separator
						orientation="vertical"
						size={{ sm: "1", lg: "2", xl: "2" }}
						className="bg-black dark:bg-gray-400"
					/>

					<Link href="/resume" target="_blank">
						<Tooltip content="Resume">
							<div className="hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all duration-300">
								<FileIcon className="w-[19px] h-[19px] max-sm:h-[15px] max-sm:w-[15px] text-black dark:text-white" />
							</div>
						</Tooltip>
					</Link>

					<Link
						href="https://github.com/surajgoraicse"
						target="_blank"
					>
						<Tooltip content="Github">
							<div className="hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all duration-300">
								<GitHubLogoIcon className="w-[19px] h-[19px] max-sm:w-[15px] max-sm:h-[15px] text-black dark:text-white" />
							</div>
						</Tooltip>
					</Link>

					<Link
						href="https://x.com/intent/follow?screen_name=surajgoraicse"
						target="_blank"
					>
						<Tooltip content="X">
							<div className="hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all duration-300">
								<FaXTwitter className="w-[17px] h-[17px] max-sm:w-[15px] max-sm:h-[15px] text-black dark:text-white" />
							</div>
						</Tooltip>
					</Link>

					<Link
						href="https://www.linkedin.com/in/surajgoraicse/"
						target="_blank"
					>
						<Tooltip content="Linkedin">
							<div className="hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all duration-300">
								<LinkedInLogoIcon className="w-[19px] h-[19px] max-sm:w-[15px] max-sm:h-[15px] text-black dark:text-white" />
							</div>
						</Tooltip>
					</Link>

					<Separator
						orientation="vertical"
						size={{ sm: "1", lg: "2", xl: "2" }}
						className="bg-black dark:bg-gray-400"
					/>

					<div
						className="hover:px-3 max-sm:hover:px-2 py-2.5 rounded-full transition-all duration-300 cursor-pointer"
						onClick={toggleDarkMode}
					>
						<div className="flex items-center">
							<button>
								{isDarkMode ? (
									<MoonIcon className="w-[18px] h-[18px] max-sm:w-[14px] max-sm:h-[14px]" />
								) : (
									<SunIcon className="w-5 h-5 max-sm:w-[15px] max-sm:h-[15px]" />
								)}
							</button>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
