import posts from './_posts.js';

const contents = JSON.stringify(posts.map(post => {
	return {
		title: post.title,
		slug: post.slug,
		lead: post.lead,
		tags: post.tags,
		pubDate: post.pubDate
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}