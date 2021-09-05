// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
	// Drops any method that is not POST
	if (req.method !== "POST") {
		res.statusCode(405).end();
		return;
	}

	const { name, email, password, feedurl, blogurl, notes } = req.body;
  
}
