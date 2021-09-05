import Airtable, { Error } from "airtable";
const base = new Airtable({ apiKey: process.env.API_KEY }).base(
	process.env.BASE_ID
);

export const savePost = ({ name, email, blogurl, feedurl, notes }) => {
	return base("Blogs").create([
		{
			fields: { name, email, blogurl, feedurl, notes },
		},
		,
		err => {
			if (err) {
				console.log(err);
				return false;
			}
			return true;
		},
	]);
}
