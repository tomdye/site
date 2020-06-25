import { create, tsx } from '@dojo/framework/core/vdom';
import * as commonCss from '../../Common.m.css';
import * as css from './BlogList.m.css';
import { BlogSummary } from '../BlogSummary';
import block from '@dojo/framework/core/middleware/block';
import getBlogPreviews from '../../blocks/wp-blog-previews.block';
import createBlogFeed from '../../blocks/wp-rss.block';
import { RenderResult } from '@dojo/framework/core/interfaces';
import { Link } from '@dojo/framework/routing/Link';
import { BlogListSidePane } from '../BlogListSidePane';

export interface BlogListProperties {
	page: number;
}

const factory = create({ block }).properties<BlogListProperties>();

export const BlogList = factory(function BlogList({ properties, middleware: { block } }) {
	const { page } = properties();
	const previews = block(getBlogPreviews)('https://wp.sitepen.com', 12, page);
	block(createBlogFeed)('https://wp.sitepen.com');

	let blogSummaryItems: RenderResult[] = [];
	let pagination: RenderResult | undefined;

	if (previews) {
		const { blogPreviews, currentPage, totalPages } = previews;
		blogSummaryItems = blogPreviews.map((preview, index) => {
			return (
				<li key={`blog-${page}-${index}`} classes={css.blogItem}>
					<BlogSummary slug={preview.slug}>
						{{
							title: preview.title,
							author: preview.author,
							date: preview.date,
							blurb: preview.excerpt,
							image: <img src={preview.image} />
						}}
					</BlogSummary>
				</li>
			);
		});

		pagination = (
			<nav>
				{currentPage > 1 && (
					<Link
						classes={css.paginationLink}
						to="blogs"
						params={{ page: `${currentPage - 1}` }}
					>
						{`<< Previous`}
					</Link>
				)}
				{currentPage < totalPages && (
					<Link
						classes={css.paginationLink}
						to="blogs"
						params={{ page: `${currentPage + 1}` }}
					>
						{`Next >>`}
					</Link>
				)}
			</nav>
		);
	}

	return (
		<div classes={css.root}>
			<head>
				<title>Development and JavaScript Blog | SitePen</title>
				<meta
					name="description"
					content="The SitePen blog gives educational tips for solving big business problems and achieving technical objectives."
				/>
				<meta name="robots" content="index, follow" />
				<meta
					name="googlebot"
					content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
				/>
				<meta
					name="bingbot"
					content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
				/>
				<link rel="canonical" href="https://www.sitepen.com/blog/" />
				<meta property="og:locale" content="en_US" />
				<meta property="og:type" content="article" />
				<meta property="og:title" content="Development and JavaScript Blog | SitePen" />
				<meta
					property="og:description"
					content="The SitePen blog gives educational tips for solving big business problems and achieving technical objectives."
				/>
				<meta property="og:url" content="https://www.sitepen.com/blog/" />
				<meta property="og:site_name" content="SitePen" />
				<meta property="article:publisher" content="https://www.facebook.com/SitePen" />
				<meta
					property="og:image"
					content="https://wp.sitepen.com/wp-content/uploads/2020/01/favicon.png"
				/>
				<meta property="og:image:width" content="512" />
				<meta property="og:image:height" content="512" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Development and JavaScript Blog | SitePen" />
				<meta
					name="twitter:description"
					content="The SitePen blog gives educational tips for solving big business problems and achieving technical objectives."
				/>
				<meta name="twitter:creator" content="@SitePen" />
				<meta name="twitter:site" content="@SitePen" />
			</head>
			<div classes={css.spacer}></div>
			<div classes={commonCss.contentWrapper}>
				<section classes={css.content}>
					<div classes={css.leading}>
						<ul classes={css.blogList}>{blogSummaryItems}</ul>
						{pagination}
					</div>
					<div classes={css.trailing}>
						<BlogListSidePane />
					</div>
				</section>
			</div>
		</div>
	);
});

export default BlogList;
