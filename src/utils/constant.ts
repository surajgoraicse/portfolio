import { I_Education, I_Experience, Project } from "@/types/project";

// export const experienceData: I_Experience[] = [
// 	{
// 		company_link: "https://naiaredesign.com/",
// 		company_logo: "/naia.png",
// 		company_name: "Naia Redesign",
// 		duration: "aug 2025 - present",
// 		job_title: "Founding Engineer",
// 		description: "",
// 	},
// 	{
// 		company_link: "https://www.adobe.com/",
// 		company_logo: "/adobe.png",
// 		company_name: "Adobe Inc.",
// 		duration: "2024 - present",
// 		job_title: "4x Grant Recipient",
// 		description: "",
// 	},
// 	{
// 		company_link: "https://x.com/surajgoraicse",
// 		company_logo: "/freelance-icon.webp",
// 		company_name: "building full stack apps",
// 		duration: "2024 - early 2025",
// 		job_title: "Freelance",
// 		description: "",
// 	},
// 	{
// 		company_link: "https://x.com/surajgoraicse",
// 		company_logo: "/stealth-startup.jpeg",
// 		company_name: "Stealth Startup",
// 		duration: "feb 2024 - june 2024",
// 		job_title: "Full Stack Development - TA",
// 		description: "",
// 	},
export const experienceData: I_Experience[] = [
	{
		company_link: "https://team.shiksha.com/",
		company_logo: "/shiksha.svg",
		company_name: "Team Shiksha",
		duration: "2025 - present",
		job_title: "Backend Developer",
		description: "",
	},
];

export const educationData: I_Education[] = [
	{
		institute_link: "https://nsuniv.ac.in/",
		institute_logo: "/nsu.png",
		course_title: "Bachelors of Technology in CSE",
		ending_date: "2028",
		institute_name: "Netaji Subhas University",
		cgpa: 8.5,
		description: "",
	},
];

export const fullstackProjects: Project[] = [
	{
		logo: "/credit-buddy.svg",
		title: "Credit Buddy",
		description:
			"Credit Buddy simplifies credit card queries with AI-powered insights, offering quick and reliable solutions for users to manage their finances better and make informed decisions effortlessly.",
		techStack: ["Next.js", "Puppeteer", "Google Gemini", "TypeScript"],
		link: "https://creditbuddy.suraj.me",
		source: "https://github.com/suraj26/gen-ai",
	},

	{
		logo: "/flick-ai.png",
		title: "Flick.AI",
		description:
			"An AI-Powered tool with 200+ users designed to refine your tweets with full customizations and make them stand out—because GPT just doesn’t get it.",
		techStack: [
			"Next.js",
			"TypeScript",
			"Google Gemini",
			"Prisma",
			"PostgreSQL",
			"NextAuth",
			"Tailwind CSS",
		],
		link: "https://flickai.suraj.me",
		source: "https://github.com/suraj26/flick-ai",
	},
	{
		logo: "/memehub.png",
		title: "MemeHub",
		description:
			"MemeHub is a meme generator that allows users to create and share memes with a user-friendly interface and a wide range of templates.",
		techStack: [
			"Next.js",
			"Typescript",
			"framer-motion",
			"Tailwind CSS",
			"Magic UI",
		],
		link: "https://www.memehub.mom/",
		source: "https://github.com/suraj26/meme-generator",
	},
	{
		logo: "/anon-4.png",
		title: "GhostGram - SaaS platform",
		description:
			"GhostGram is an anonymous messaging platform that lets users securely send and receive messages through unique, authenticated links.",
		techStack: [
			"Next.js",
			"Typescript",
			"Gemini",
			"MongoDB",
			"NextAuth",
			"Nodemailer",
			"Tailwind CSS",
			"Shadcn",
		],
		link: "https://ghostgram.suraj.me",
		source: "https://github.com/suraj26/ghostgram",
	},
	{
		logo: "/token-2.png",
		title: "OrbitToken",
		description:
			"An decentralized platform enables users launch their custom tokens, transfer tokens, view token balances, transfer SOL, and check account balances.",
		techStack: [
			"React",
			"Web3.js",
			"TypeScript",
			"Recoil",
			"spl-token",
			"Tailwind CSS",
		],
		link: "https://orbittoken.suraj.me",
		source: "https://github.com/suraj26/OrbitToken",
	},
	{
		logo: "/chat-icon.png",
		title: "The Chat Haven",
		description:
			"The Chat Haven is a chat application that allows users to create & join room and send & receive messages in real-time.",
		techStack: [
			"Next.js",
			"Node.js",
			"WebSockets",
			"TypeScript",
			"Tailwind CSS",
		],
		link: "https://chathaven.suraj.me",
		source: "https://github.com/suraj26/chat-app",
	},
	{
		logo: "/book-1.png",
		title: "Lexicon",
		description:
			"Lexicon is a platform for discovering, downloading, and uploading books with a clean, user-friendly interface, working on auth and review functionality.",
		techStack: [
			"Next.js",
			"Typescript",
			"NextAuth",
			"framer-motion",
			"MongoDB",
			"Tailwind CSS",
			"Shadcn",
			"Zod",
		],
		link: "https://lexicon.suraj.me",
		source: "https://github.com/suraj26/lexicon",
	},

	{
		logo: "/codify.png",
		title: "Codify",
		description:
			"Codify transforms your source code into stunning, shareable images with customizable themes, fonts, and backgrounds—perfect for developers and tutorials.",
		techStack: ["Next.js", "TypeScript", "Shadcn", "Tailwind CSS"],
		link: "https://codify.suraj.me",
		source: "https://github.com/suraj26/Codify",
	},
	{
		logo: "/saloon-5.png",
		title: "Enrich Salon Management",
		description:
			"Enrich Hair Salon is a salon booking system with online payments and an admin dashboard for managing services and bookings.",
		techStack: [
			"React",
			"MUI",
			"Tailwind CSS",
			"Razorpay",
			"Nodemailer",
			"React Charts",
			"Node.js",
			"Express.js",
			"MongoDB",
		],
		link: "https://enrichsalon.suraj.me",
		source: "https://github.com/suraj26/enrich-salon-management",
	},

	{
		logo: "/top-50.png",
		title: "Life50",
		description:
			"Life50 curates the top 50 life-changing books, habits, tools, and more—chosen by the internet and you. Share, upvote, and add what has transformed your life to inspire others.",
		techStack: ["Next.js", "Supabase", "TypeScript", "Zod", "Tailwind CSS"],
		link: "https://life50.suraj.me",
		source: "https://github.com/suraj26/life50",
	},
	{
		logo: "/sumzsvg.svg",
		title: "SumZ - Article Summarizer",
		description:
			"SumZ is an article summarizer that quickly generates concise summaries of lengthy articles, helping users grasp key points efficiently. It's designed for speed and accuracy with user-friendly interface.",
		techStack: ["React", "Redux", "Open AI", "Tailwind CSS"],
		link: "https://sumz-summarize.netlify.app",
		source: "https://github.com/suraj26/Article-Summarizer",
	},
	{
		logo: "/malfoy.png",
		title: "SaaS Landing Page",
		description:
			"Crafted this high-conversion SaaS landing page for a startup, focusing on clean design, user experience, and optimized performance to drive user engagement.",
		techStack: [
			"Next.js",
			"TypeScript",
			"Shadcn",
			"motion",
			"Tailwind CSS",
		],
		link: "https://malfoy.suraj.me",
		source: "https://github.com/suraj26/malfoy",
	},
];

export const backendProjects: Project[] = [
	{
		logo: "/credit-buddy.svg",
		title: "Credit Buddy",
		description:
			"Credit Buddy simplifies credit card queries with AI-powered insights, offering quick and reliable solutions for users to manage their finances better and make informed decisions effortlessly.",
		techStack: ["Next.js", "Puppeteer", "Google Gemini", "TypeScript"],
		link: "https://creditbuddy.suraj.me",
		source: "https://github.com/suraj26/gen-ai",
	},

	{
		logo: "/flick-ai.png",
		title: "Flick.AI",
		description:
			"An AI-Powered tool with 200+ users designed to refine your tweets with full customizations and make them stand out—because GPT just doesn’t get it.",
		techStack: [
			"Next.js",
			"TypeScript",
			"Google Gemini",
			"Prisma",
			"PostgreSQL",
			"NextAuth",
			"Tailwind CSS",
		],
		link: "https://flickai.suraj.me",
		source: "https://github.com/suraj26/flick-ai",
	},
	{
		logo: "/memehub.png",
		title: "MemeHub",
		description:
			"MemeHub is a meme generator that allows users to create and share memes with a user-friendly interface and a wide range of templates.",
		techStack: [
			"Next.js",
			"Typescript",
			"framer-motion",
			"Tailwind CSS",
			"Magic UI",
		],
		link: "https://www.memehub.mom/",
		source: "https://github.com/suraj26/meme-generator",
	},
	{
		logo: "/anon-4.png",
		title: "GhostGram - SaaS platform",
		description:
			"GhostGram is an anonymous messaging platform that lets users securely send and receive messages through unique, authenticated links.",
		techStack: [
			"Next.js",
			"Typescript",
			"Gemini",
			"MongoDB",
			"NextAuth",
			"Nodemailer",
			"Tailwind CSS",
			"Shadcn",
		],
		link: "https://ghostgram.suraj.me",
		source: "https://github.com/suraj26/ghostgram",
	},
	{
		logo: "/token-2.png",
		title: "OrbitToken",
		description:
			"An decentralized platform enables users launch their custom tokens, transfer tokens, view token balances, transfer SOL, and check account balances.",
		techStack: [
			"React",
			"Web3.js",
			"TypeScript",
			"Recoil",
			"spl-token",
			"Tailwind CSS",
		],
		link: "https://orbittoken.suraj.me",
		source: "https://github.com/suraj26/OrbitToken",
	},
	{
		logo: "/chat-icon.png",
		title: "The Chat Haven",
		description:
			"The Chat Haven is a chat application that allows users to create & join room and send & receive messages in real-time.",
		techStack: [
			"Next.js",
			"Node.js",
			"WebSockets",
			"TypeScript",
			"Tailwind CSS",
		],
		link: "https://chathaven.suraj.me",
		source: "https://github.com/suraj26/chat-app",
	},
	{
		logo: "/book-1.png",
		title: "Lexicon",
		description:
			"Lexicon is a platform for discovering, downloading, and uploading books with a clean, user-friendly interface, working on auth and review functionality.",
		techStack: [
			"Next.js",
			"Typescript",
			"NextAuth",
			"framer-motion",
			"MongoDB",
			"Tailwind CSS",
			"Shadcn",
			"Zod",
		],
		link: "https://lexicon.suraj.me",
		source: "https://github.com/suraj26/lexicon",
	},

	{
		logo: "/codify.png",
		title: "Codify",
		description:
			"Codify transforms your source code into stunning, shareable images with customizable themes, fonts, and backgrounds—perfect for developers and tutorials.",
		techStack: ["Next.js", "TypeScript", "Shadcn", "Tailwind CSS"],
		link: "https://codify.suraj.me",
		source: "https://github.com/suraj26/Codify",
	},
	{
		logo: "/saloon-5.png",
		title: "Enrich Salon Management",
		description:
			"Enrich Hair Salon is a salon booking system with online payments and an admin dashboard for managing services and bookings.",
		techStack: [
			"React",
			"MUI",
			"Tailwind CSS",
			"Razorpay",
			"Nodemailer",
			"React Charts",
			"Node.js",
			"Express.js",
			"MongoDB",
		],
		link: "https://enrichsalon.suraj.me",
		source: "https://github.com/suraj26/enrich-salon-management",
	},

	{
		logo: "/top-50.png",
		title: "Life50",
		description:
			"Life50 curates the top 50 life-changing books, habits, tools, and more—chosen by the internet and you. Share, upvote, and add what has transformed your life to inspire others.",
		techStack: ["Next.js", "Supabase", "TypeScript", "Zod", "Tailwind CSS"],
		link: "https://life50.suraj.me",
		source: "https://github.com/suraj26/life50",
	},
	{
		logo: "/sumzsvg.svg",
		title: "SumZ - Article Summarizer",
		description:
			"SumZ is an article summarizer that quickly generates concise summaries of lengthy articles, helping users grasp key points efficiently. It's designed for speed and accuracy with user-friendly interface.",
		techStack: ["React", "Redux", "Open AI", "Tailwind CSS"],
		link: "https://sumz-summarize.netlify.app",
		source: "https://github.com/suraj26/Article-Summarizer",
	},
	{
		logo: "/malfoy.png",
		title: "SaaS Landing Page",
		description:
			"Crafted this high-conversion SaaS landing page for a startup, focusing on clean design, user experience, and optimized performance to drive user engagement.",
		techStack: [
			"Next.js",
			"TypeScript",
			"Shadcn",
			"motion",
			"Tailwind CSS",
		],
		link: "https://malfoy.suraj.me",
		source: "https://github.com/suraj26/malfoy",
	},
];
