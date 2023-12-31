import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
	const projects = await getProjects();
	return (
		<div>
			<h1 className="lg:text-7xl md:text-4xl text-2xl font-extrabold">
				Hello I&apos;m{" "}
				<span className="bg-gradient-to-r from-orange-400 via-red-500 to-blue-600 bg-clip-text text-transparent">
					Ahmed
				</span>
				!
			</h1>
			<div className="my-2 h-1/2">
				<video width="100%" height="auto" controls autoPlay>
					<source
						src="/video.mp4" // Update with your video source URL
						type="video/mp4"
					/>
					Your browser does not support the video tag.
				</video>
			</div>
			<p className="mt-3 text-gray-500 text-xl">
				Welcome! Checkout my projects
			</p>
			<h2 className="mt-8  lg:text-3xl md:text-2xl text-xl font-bold text-gray-700">
				My projects
			</h2>
			<div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{projects.map((project) => (
					<Link
						href={`/projects/${project.slug}`}
						key={project._id}
						className="rounded-lg shadow-xl p-1 hover:scale-105"
					>
						{project.image && (
							<Image
								src={project.image}
								alt={project.name}
								width={750}
								height={300}
								className="object-cover rounded-lg"
							/>
						)}
						<div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-blue-600 bg-clip-text text-transparent">
							{project.name}
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}
