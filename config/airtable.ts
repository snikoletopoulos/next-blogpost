const Airtable = require("airtable");
const base = new Airtable({ apiKey: process.env.API_KEY }).base(
	process.env.API_BASE
);

export default function airtableSavePost({
	name,
	email,
	blogurl,
	feedurl,
	notes,
}) {
	base("Blogs").create(
		[
			{
				fields: { name, email, blogurl, feedurl, notes },
			},
		],
		err => {
			if (err) {
				console.log(err);
				return false;
			}
		}
	);
}

