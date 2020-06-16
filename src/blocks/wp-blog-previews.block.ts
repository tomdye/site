import fetch from '../util/fetch';

export interface BlogPreview {
	id: string;
	title: string;
	slug: string;
	image: string;
	imageSmall: string;
	excerpt: string;
	date: string;
	author: string;
}

export interface BlogPreviews {
	blogPreviews: BlogPreview[];
	total: number;
	totalPages: number;
	currentPage: number;
	pageSize: number;
}

const categories = {
	dojo: 214,
	enterprisejs: 2
};

export default async function (
	baseUrl: string,
	size: number,
	page: number,
	category?: keyof typeof categories
): Promise<BlogPreviews> {
	let url = `${baseUrl}/wp-json/wp/v2/posts?per_page=${size}&page=${page}&_embed=wp:featuredmedia,author`;
	if (category) {
		url = `${url}&categories=${categories[category]}`;
	}

	const response = await fetch(url, { tempCache: true });
	const json: any[] = await response.json();
	const blogPreviews = json.map<BlogPreview>((item) => {
		let image = item.jetpack_featured_media_url;
		let imageSmall;

		if (item._embedded['wp:featuredmedia'][0].media_details.sizes) {
			if (item._embedded['wp:featuredmedia'][0].media_details.sizes.large) {
				image = item._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url;
			}
			if (item._embedded['wp:featuredmedia'][0].media_details.sizes.medium) {
				imageSmall =
					item._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url;
			}
		}

		return {
			title: item.title.rendered,
			slug: item.slug,
			id: item.id,
			image,
			imageSmall: imageSmall || image,
			excerpt: item.excerpt.rendered,
			date: item.date,
			author: item._embedded.author[0].name
		};
	});

	return {
		blogPreviews,
		total: parseInt(String(response.headers.get('x-wp-total'))),
		// limit pages for testing
		totalPages: 4, //parseInt(String(response.headers.get('x-wp-totalpages'))),
		currentPage: page,
		pageSize: size
	};
}
