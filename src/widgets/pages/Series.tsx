import { create, tsx } from '@dojo/framework/core/vdom';
import * as commonCss from '../../Common.m.css';
import * as css from './BlogList.m.css';
import * as categoryCss from './Category.m.css';
import block from '@dojo/framework/core/middleware/block';
import getBlogPreviews from '../../blocks/wp-blog-previews.block';
import getSeries from '../../blocks/wp-blog-series.block';
import { BlogListSidePane } from '../BlogListSidePane';
import { BlogPreviewList } from '../BlogPreviewList';
import { wpBaseUrl } from '../../config';

export interface SeriesProperties {
	slug: string;
}

const factory = create({ block }).properties<SeriesProperties>();

export const Series = factory(function Category({ properties, middleware: { block } }) {
	const { slug } = properties();

	const series = block(getSeries)(wpBaseUrl);
	const seriesDetails = series?.find((series) => series.slug === slug);

	const previews = block(getBlogPreviews)(wpBaseUrl, 100, 1, {
		series: seriesDetails?.id
	});

	return (
		<div classes={css.root}>
			<head>
				<title>{`${seriesDetails?.name} Archives | SitePen`}</title>
				<meta name="robots" content="index, follow" />
				<meta
					name="googlebot"
					content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
				/>
				<meta
					name="bingbot"
					content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
				/>
				<link rel="canonical" href={`https://www.sitepen.com/blog/series/${slug}/`} />
				<meta property="og:locale" content="en_US" />
				<meta property="og:type" content="article" />
				<meta property="og:title" content={`${seriesDetails?.name} Archives | SitePen`} />
				<meta property="og:url" content={`https://www.sitepen.com/blog/series/${slug}/`} />
				<meta property="og:site_name" content="SitePen" />
				<meta
					property="og:image"
					content="https://wp.sitepen.com/wp-content/uploads/2020/01/og_imageV1.jpg"
				/>
				<meta property="og:image:width" content="1600" />
				<meta property="og:image:height" content="900" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@SitePen" />
			</head>
			<div classes={css.spacer}></div>
			<div classes={commonCss.contentWrapper}>
				<h1 classes={categoryCss.title}>{`Series: ${seriesDetails?.name}`}</h1>
				<section classes={css.content}>
					<div classes={css.leading}>
						{previews && <BlogPreviewList previews={previews?.blogPreviews} />}
					</div>
					<div classes={css.trailing}>
						<BlogListSidePane />
					</div>
				</section>
			</div>
		</div>
	);
});

export default Series;
