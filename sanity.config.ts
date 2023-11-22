import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
	projectId: "xzps6ubs",
	dataset: "production",
	title: "pegasus - personal blog",
	apiVersion: "11-11-2023",
	basePath: "/admin",
	plugins: [deskTool()],
	schema: { types: schemas },
});

export default config;
