import { create, tsx } from '@dojo/framework/core/vdom';
import * as commonCss from '../../Common.m.css';
import * as css from './BlogList.m.css';
import * as categoryCss from './Category.m.css';
import { BlogSummary } from '../BlogSummary';
import block from '@dojo/framework/core/middleware/block';
import getBlogPreviews from '../../blocks/wp-blog-previews.block';
import getCategories from '../../blocks/wp-blog-category.block';
import { RenderResult } from '@dojo/framework/core/interfaces';
import { BlogListSidePane } from '../BlogListSidePane';

export interface CategoryProperties {
	slug: string;
}

const factory = create({ block }).properties<CategoryProperties>();

export const Category = factory(function Category({ properties, middleware: { block } }) {
	const { slug } = properties();

	const categories = block(getCategories)('https://wp.sitepen.com');
	const categoryDetails = categories?.find((category) => category.slug === slug);

	const previews = block(getBlogPreviews)('https://wp.sitepen.com', 100, 1, {
		category: categoryDetails?.id
	});

	let blogSummaryItems: RenderResult[] = [];

	if (previews) {
		const { blogPreviews } = previews;
		blogSummaryItems = blogPreviews.map((preview, index) => {
			return (
				<li key={`blog-category-${slug}-${index}`} classes={css.blogItem}>
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
	}

	return (
		<div classes={css.root}>
			<head>
				<title>{`${categoryDetails?.name} Archives | SitePen`}</title>
				<meta name="robots" content="index, follow" />
				<meta
					name="googlebot"
					content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
				/>
				<meta
					name="bingbot"
					content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
				/>
				<link rel="canonical" href={`https://www.sitepen.com/blog/category/${slug}/`} />
				<meta property="og:locale" content="en_US" />
				<meta property="og:type" content="article" />
				<meta property="og:title" content={`${categoryDetails?.name} Archives | SitePen`} />
				<meta
					property="og:url"
					content={`https://www.sitepen.com/blog/category/${slug}/`}
				/>
				<meta property="og:site_name" content="SitePen" />
				<meta
					property="og:image"
					content="https://www.sitepen.com/wp-content/uploads/2020/01/og_imageV1.jpg"
				/>
				<meta property="og:image:width" content="1600" />
				<meta property="og:image:height" content="900" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@SitePen" />
			</head>
			<div classes={css.spacer}></div>
			<div classes={commonCss.contentWrapper}>
				<h1 classes={categoryCss.title}>{`Category: ${categoryDetails?.name}`}</h1>
				<section classes={css.content}>
					<div classes={css.leading}>
						<ul classes={css.blogList}>{blogSummaryItems}</ul>
					</div>
					<div classes={css.trailing}>
						<BlogListSidePane />
					</div>
				</section>
			</div>
		</div>
	);
});

export default Category;
