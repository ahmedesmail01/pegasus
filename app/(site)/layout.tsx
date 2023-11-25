import type { Metadata } from "next";
import "../globals.css";
import Link from "next/link";
import { getPages } from "@/sanity/sanity-utils";

export const metadata: Metadata = {
	title: "Pegasus solutions",
	description: "Generated by Ahmed Esmail",
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const pages = await getPages();
	return (
		<html lang="en">
			<body className="max-w-3xl m-auto py-10 lg:px-2 md:px-3 sm:px-5  ">
				<header className="flex items-center justify-between">
					<Link
						href="/"
						className="text-2xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-blue-600 bg-clip-text text-transparent"
					>
						Pegasus Solutions
					</Link>
					<div className="flex items-center gap-5 text-sm text-gray-600">
						{pages.map((page) => (
							<Link
								href={`/${page.slug}`}
								key={page._id}
								className="hover:underline"
							>
								{page.title}
							</Link>
						))}
					</div>
				</header>
				<main className="py-10">{children}</main>
			</body>
		</html>
	);
}
