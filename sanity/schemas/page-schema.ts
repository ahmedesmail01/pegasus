const page = {
	name: "page",
	title: "page",
	type: "document",
	fields: [
		{
			name: "title",
			title: "title",
			type: "string",
		},
		{
			name: "slug",
			title: "slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 96,
			},
		},
		{
			name: "content",
			title: "content",
			type: "array",
			of: [{ type: "block" }],
		},
	],
};

export default page;
