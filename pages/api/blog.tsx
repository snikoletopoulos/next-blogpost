//@ts-ignore
import { savePost} from "/config/airtable";
import type { NextApiResponse, NextApiRequest } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	// Drops any method that is not POST
	if (req.method !== "POST") {
		res.statusCode = 405;
		res.end();
		return;
	}
	const { name, email, blogurl, feedurl, notes } = req.body;
	const post: Post = { name, email, blogurl, feedurl, notes };

	if (savePost(post)) {
		res.json({ success: true });
	} else {
		res.json({ failed: true });
	}
}

interface Post {
	name: string;
	email: string;
	blogurl: string;
	feedurl: string;
	notes: string;
	approved?: boolean;
}
