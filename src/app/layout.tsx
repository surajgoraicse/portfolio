import Navbar from "@/components/Navbar";
import DarkModeProvider from "@/context/DarkModeContext";
import Provider from "@/context/Provider";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Toaster } from "sonner";
import "./globals.css";
const ConditionalFooter = dynamic(() => import("./ConditionalFooter"), {
	ssr: false,
});

export const metadata: Metadata = {
	title: "suraj",
	description:
		"Suraj Gorai is a Backend Developer specializing in building scalable, production-grade systems using Go and NodeJS from scratch. Explore his portfolio to see my projects and skills.",
	keywords:
		"Suraj Gorai, Backend Developer, Web Developer, Portfolio, Go, TypeScript, Golang, Redis, System Design, Node.js, software engineer, database,",
	authors: [{ name: "Suraj Gorai" }],
	openGraph: {
		title: "suraj",
		description:
			"Suraj Gorai is a Backend Developer specializing in building scalable, production-grade systems using Go and NodeJS from scratch. Explore his portfolio to see my projects and skills.",
		url: "https://suraj.coderz.space",
		siteName: "suraj",
		images: [
			{
				url: "/cover.png",
				width: 400,
				height: 200,
				alt: "suraj",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "suraj",
		creator: "@surajgoraicse",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<Provider>
				<DarkModeProvider>
					<body className={`bg-white dark:bg-black`}>
						<Toaster position="bottom-right" />
						<Theme className="dark:!bg-black">
							<Navbar />
							{children}
							<Analytics />
							<ConditionalFooter />
						</Theme>
					</body>
				</DarkModeProvider>
			</Provider>
		</html>
	);
}
