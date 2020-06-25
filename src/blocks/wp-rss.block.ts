import { Feed } from 'feed';
import { join } from 'path';
import { outputFileSync, existsSync } from 'fs-extra';
import getBlogPreviews from './wp-blog-previews.block';
import getCategories from './wp-blog-category.block';

const outputDirectory = join(__dirname, '../../output/dist');
const rssFeedOutputPath = join(outputDirectory, 'rss.xml');
const atomFeedOutputPath = join(outputDirectory, 'atom.xml');

export default async function createBlogFeed(url: string) {
	if (existsSync(rssFeedOutputPath)) {
		return;
	}

	const feed = new Feed({
		title: 'Sitepen',
		description: 'Enterprise Web Apps Done Right',
		language: 'en',
		id: 'https://www.sitepen.com/blog',
		link: 'https://www.sitepen.com/blog',
		favicon: 'https://www.sitepen.com/favicon.png',
		copyright: 'All rights reserved 2020, SitePen',
		feedLinks: {
			rss: 'https://www.sitepen.com/rss.xml',
			atom: 'https://www.sitepen.com/atom.xml'
		},
		author: {
			name: 'SitePen'
		},
		feed: ''
	});

	const previews = await getBlogPreviews(url, 100, 1);
	const allCategories = await getCategories(url);

	for (let post of previews.blogPreviews) {
		const { title, date, author, excerpt, imageSmall, slug } = post;
		const url = `https://www.sitepen.com/blog/${slug}`;

		feed.addItem({
			title,
			id: url,
			author: [{ name: author }],
			link: url,
			description: excerpt,
			date: new Date(date),
			image: imageSmall,
			category: post.categories.map((categoryId) => {
				const categoryDetails = allCategories.find(
					(category) => category.id === categoryId
				);
				return {
					name: categoryDetails?.name,
					term: categoryDetails?.slug
				};
			})
		});
	}

	outputFileSync(rssFeedOutputPath, feed.rss2());
	outputFileSync(atomFeedOutputPath, feed.atom1());
}
