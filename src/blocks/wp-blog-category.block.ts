import fetch from '../util/fetch';
import * as parse from 'parse-link-header';

interface Category {
	id: number;
	slug: string;
	name: string;
}

export default async function getCategories(baseUrl: string): Promise<Category[]> {
	let url = `${baseUrl}/wp-json/wp/v2/categories?per_page=100`;
	const categories: any[] = [];
	while (url) {
		const response = await fetch(url, { tempCache: true, cacheCategory: 'categories' });
		url = '';
		const link = response.headers.get('link');
		if (link) {
			const parsedLinks = parse(link);
			if (parsedLinks && parsedLinks.next) {
				url = parsedLinks.next.url;
			}
		}
		const json = await response.json();
		categories.push(...json);
	}
	return categories.map((category: Category) => ({
		id: category.id,
		slug: category.slug,
		name: category.name
	}));
}
