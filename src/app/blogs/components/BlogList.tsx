// force to fetch new data evertime and suspend caching
export const dynamic = "force-dynamic";
export const revalidate = 0; // disables ISR

import { IBlog } from "@/types/project";
import BlogCard from "./BlogCard";
import { prisma } from "@/lib/prisma";

// export async function getBlogs() {
//     try {
//         const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs`, {
//             cache: 'no-store'
//         });
//         const data = await response.json();

//         if (data.success) {
//             return data.message;
//         }
//         return [];
//     } catch (error) {
//         console.error(`Error while fetching the blogs: ${error}`);
//         return [];
//     }
// }

// Fetching blogs using prisma

async function getBlogs() {
	try {
		const blogs = await prisma.blog.findMany({
			orderBy: {
				createdAt: "desc",
			},
		});
		return blogs;
	} catch (error) {
		console.error("Error while fetching blogs:", error);
		return [];
	}
}

async function BlogList() {
	const blogs = await getBlogs();

	return (
		<div className="w-full px-64 max-[1025px]:px-0 max-[1285px]:px-0 max-sm:px-2 flex flex-col items-center mt-4 pb-8 max-sm:overflow-hidden ">
			{blogs.map((blog: IBlog, idx: number) => (
				<BlogCard
					key={idx}
					title={blog.title}
					createdAt={blog.createdAt.toString()}
					content={blog.content}
					id={blog.id}
				/>
			))}
		</div>
	);
}

export default BlogList;
