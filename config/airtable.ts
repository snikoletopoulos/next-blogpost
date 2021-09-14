import Airtable, { Error } from "airtable";

const base = new Airtable({ apiKey: process.env.API_KEY }).base(
	process.env.BASE_ID
);

export const savePost = ({ name, email, blogurl, feedurl, notes }) => {
	return base("Blogs").create(
		[{ fields: { name, email, blogurl, feedurl, notes } }],
		(err: Error) => {
			if (err) {
				console.log(err);
				return false;
			}
			return true;
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
