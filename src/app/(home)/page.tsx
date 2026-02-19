import dynamic from "next/dynamic";
import InitialLanding from "./components/InitialLanding";

const Experience = dynamic(() => import("@/components/Experience"), {
	ssr: false,
});
const Education = dynamic(() => import("@/components/Education"), {
	ssr: false,
});

export default function Home() {
	return (
		<div className="max-[350px]:overflow-hidden mt-8 max-sm:mt-0">
			<InitialLanding />

			<div className="w-full flex justify-center mt-8">
				<Experience />
			</div>

			<div className="w-full flex justify-center mt-8">
				<Education />
			</div>
		</div>
	);
}
