"use client";

import HeroSection from "@/components/HeroSection";
import Skills from "@/components/Skills";
import TabbedProjectList from "@/components/TabbedProjectList";
import Title from "@/components/ui/Title";
import { motion } from "framer-motion";

export default function InitialLanding() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
		>
			<HeroSection />
			<div className="w-full flex justify-center mt-6">
				<Skills />
			</div>

			<div className="w-full flex flex-col justify-center items-center mt-8">
				<Title title="Proof of Work" />
				<br />
				<TabbedProjectList />
			</div>
		</motion.div>
	);
}
