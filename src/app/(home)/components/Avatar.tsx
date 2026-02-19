import { Link, Avatar as Picture } from "@radix-ui/themes";

const Avatar = () => {
	return (
		<Link
			href="https://x.com/intent/follow?screen_name=surajgoraicse"
			target="_blank"
		>
			<Picture
				src="/suraj.png"
				fallback="S"
				size="6"
				radius="full"
				alt="suraj"
			/>
		</Link>
	);
};

export default Avatar;
