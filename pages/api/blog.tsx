import type { NextApiResponse, NextApiRequest } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	// Drops any method that is not POST
	if (req.method !== "POST") {
		res.statusCode = 405;
		res.end();
		return;
	}

	const { name, email, blogurl, feedurl, notes } = req.body;
}
