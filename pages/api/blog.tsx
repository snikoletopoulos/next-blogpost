// @ts-expect-error
import { savePost } from "@/utils/airtable";
// @ts-expect-error
import type { Post } from "@/utils/airtable";
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
	let saved;
	if (savePost(post, res)) {
		res.json({ success: true });
	} else {
		console.log("hi");
		res.json({ failed: true, test: saved, teseta: "hi" });
	}
}
