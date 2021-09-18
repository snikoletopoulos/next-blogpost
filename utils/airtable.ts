import Airtable, { Error } from "airtable";
import type { NextApiResponse } from "next";

const base = new Airtable({ apiKey: process.env.API_KEY }).base(
	process.env.BASE_ID
);

export const savePost = (post: Post, res: NextApiResponse) => {
	return base("Blogs").create(
		[{ fields: { ...post, mpla: "asfa" } }],
		(err: Error) => {
			if (err) {
				console.error(err);
				res.statusCode = 500;
				res.end();
				return;
			}
		}
	);
};

export const getPosts = async () => {
	const records = await base("Blogs").select({ view: "Grid view" }).firstPage();
	return records
		.filter(record => !!record.get("approved"))
		.map(record => {
			return {
				id: record.id,
				name: record.get("name"),
				blogurl: record.get("blogurl"),
				feedurl: record.get("feedurl"),
			};
		});
};

export interface Post {
	name: string;
	email: string;
	blogurl: string;
	feedurl: string;
	notes: string;
	approved?: boolean;
}
