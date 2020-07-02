import { create, tsx } from '@dojo/framework/core/vdom';
import * as commonCss from '../../Common.m.css';
import * as css from './BlogList.m.css';
import * as categoryCss from './Category.m.css';
import icache from '@dojo/framework/core/middleware/icache';
import { BlogListSidePane } from '../BlogListSidePane';
import { BlogPreviewList } from '../BlogPreviewList';
import { wpBaseUrl } from '../../config';
import { BlogPreview, WpBlogPreview } from '../../blocks/wp-blog-previews.block';
import LoadingIndicator from '../LoadingIndicator';

export interface SearchResultsProperties {
	searchTerm: string;
}

const factory = create({ icache }).properties<SearchResultsProperties>();

export const SearchResults = factory(function SearchResults({
	properties,
	middleware: { icache }
}) {
	const { searchTerm = '' } = properties();
	const resultPreviews = icache.getOrSet(searchTerm, async () => {
		const response = await fetch(
			`${wpBaseUrl}/wp-json/wp/v2/posts?search=${searchTerm}&per_page=50&_embed=wp:featuredmedia,author`
		);
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

		return blogPreviews;
	});

	return (
		<div classes={css.root}>
			<head>
				<title>{`You search for ${searchTerm} | SitePen`}</title>
				<meta name="robots" content="noindex, follow" />
				<meta property="og:locale" content="en_US" />
				<meta property="og:type" content="article" />
				<meta property="og:title" content={`You search for ${searchTerm} | SitePen`} />
				<meta
					property="og:url"
					content={`https://www.sitepen.com/blog/search?term=${searchTerm}/`}
				/>
				<meta property="og:site_name" content="SitePen" />
				<meta
					property="og:image"
					content="https://www.sitepen.com/wp-content/uploads/2020/01/og_imageV1.jpg"
				/>
				<meta property="og:image:width" content="1600" />
				<meta property="og:image:height" content="900" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="You searched for network | SitePen" />
				<meta name="twitter:site" content="@SitePen" />
			</head>
			<div classes={css.spacer}></div>
			<div classes={commonCss.contentWrapper}>
				<h1 classes={categoryCss.title}>
					{searchTerm &&
						(resultPreviews
							? `Search Results for: ${searchTerm}`
							: `Searching for: ${searchTerm}`)}
				</h1>
				<section classes={css.content}>
					<div classes={css.leading}>
						{!resultPreviews && <LoadingIndicator />}
						{resultPreviews && resultPreviews.length && (
							<BlogPreviewList previews={resultPreviews} />
						)}
						{resultPreviews?.length === 0 && <p>Your search returned 0 results</p>}
					</div>
					<div classes={css.trailing}>
						<BlogListSidePane />
					</div>
				</section>
			</div>
		</div>
	);
});

export default SearchResults;
