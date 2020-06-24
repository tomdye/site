import fetch from '../util/fetch';
import * as parse from 'parse-link-header';

interface Series {
	id: number;
	slug: string;
	name: string;
	count: number;
}

export default async function getSeries(baseUrl: string): Promise<Series[]> {
	let url = `${baseUrl}/wp-json/wp/v2/series?per_page=100`;
	const series: any[] = [];
	while (url) {
		const response = await fetch(url, { tempCache: true, cacheCategory: 'series' });
		url = '';
		const link = response.headers.get('link');
		if (link) {
			const parsedLinks = parse(link);
			if (parsedLinks && parsedLinks.next) {
				url = parsedLinks.next.url;
			}
		}
		const json = await response.json();
		series.push(...json);
	}
	return series.map((series: Series) => ({
		id: series.id,
		slug: series.slug,
		name: series.name,
		count: series.count
	}));
}
