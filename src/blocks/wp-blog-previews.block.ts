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
	categories: number[];
}

export interface BlogPreviews {
	blogPreviews: BlogPreview[];
	total: number;
	totalPages: number;
	currentPage: number;
	pageSize: number;
}

export interface WpBlogPreview {
	jetpack_featured_media_url: string;
	slug: string;
	id: string;
	date: string;
	categories: number[];
	title: {
		rendered: string;
	};
	excerpt: {
		rendered: string;
	};
	_embedded: {
		author: {
			name: string;
		}[];
		'wp:featuredmedia': {
			media_details?: {
				sizes?: {
					large?: {
						source_url: string;
					};
					medium?: {
						source_url: string;
					};
				};
			};
		}[];
	};
}

export default async function (
	baseUrl: string,
	size: number,
	page: number,
	options?: {
		category?: number;
		series?: number;
	}
): Promise<BlogPreviews> {
	let url = `${baseUrl}/wp-json/wp/v2/posts?per_page=${size}&page=${page}&_embed=wp:featuredmedia,author`;

	if (options?.category) {
		url = `${url}&categories=${options.category}`;
	}
	if (options?.series) {
		url = `${url}&series=${options.series}`;
	}

	const response = await fetch(url, { tempCache: true });
	const json: WpBlogPreview[] = await response.json();
	const blogPreviews = json.map<BlogPreview>((item) => {
		const [media] = (item._embedded && item._embedded['wp:featuredmedia']) || [];
		const image =
			media?.media_details?.sizes?.large?.source_url || item.jetpack_featured_media_url;
		const imageSmall = media?.media_details?.sizes?.medium?.source_url || image;

		return {
			title: item.title.rendered,
			slug: item.slug,
			id: item.id,
			image,
			imageSmall: imageSmall || image,
			excerpt: item.excerpt.rendered.replace('[&hellip;]', ''),
			date: item.date,
			author: item._embedded.author[0].name || 'Unknown',
			categories: item.categories
		};
	});

	return {
		blogPreviews,
		total: parseInt(String(response.headers.get('x-wp-total'))),
		totalPages: parseInt(String(response.headers.get('x-wp-totalpages'))),
		currentPage: page,
		pageSize: size
	};
}
