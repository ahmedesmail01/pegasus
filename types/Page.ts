import { PortableTextBlock } from "sanity";

export type Page = {
	_id: string;
	_createdAt: string;
	slug: string;
	title: string;
	content: PortableTextBlock;
};
