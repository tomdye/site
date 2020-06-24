import { create, tsx } from '@dojo/framework/core/vdom';
import * as css from './BlogListSidePane.m.css';
import SmallBlogSummary from './SmallBlogSummary';
import block from '@dojo/framework/core/middleware/block';
import getBlogPreviews, { BlogPreview } from '../blocks/wp-blog-previews.block';
import getCategories from '../blocks/wp-blog-category.block';
import { RenderResult } from '@dojo/framework/core/interfaces';
import { Link } from '@dojo/framework/routing/Link';

const factory = create({ block });

export const BlogListSidePane = factory(function BlogListSidePane({ middleware: { block } }) {
	const categories = block(getCategories)('https://wp.sitepen.com');
	const popularCategories = ['angular', 'dojo', 'dojotoolkit', 'node-js-2', 'react', 'vue'];
	const dojoCategoryDetails = categories?.find((category) => category.slug === 'dojo');
	const enterpriseCategoryDetails = categories?.find(
		(category) => category.slug === 'enterprisejs'
	);

	const dojoPreviews = block(getBlogPreviews)('https://wp.sitepen.com', 3, 1, {
		category: dojoCategoryDetails?.id
	});
	const enterprisePreviews = block(getBlogPreviews)('https://wp.sitepen.com', 3, 1, {
		category: enterpriseCategoryDetails?.id
	});

	let dojoSummaryItems: RenderResult[] = [];
	let enterpriseSummaryItems: RenderResult[] = [];

	function renderSmallSummary(preview: BlogPreview, index: number) {
		return (
			<SmallBlogSummary key={`dojoblog-${index}`} slug={preview.slug}>
				{{
					title: preview.title,
					date: preview.date,
					image: <img src={preview.imageSmall} />
				}}
			</SmallBlogSummary>
		);
	}

	if (dojoPreviews) {
		const { blogPreviews } = dojoPreviews;
		dojoSummaryItems = blogPreviews.map(renderSmallSummary);
	}

	if (enterprisePreviews) {
		const { blogPreviews } = enterprisePreviews;
		enterpriseSummaryItems = blogPreviews.map(renderSmallSummary);
	}

	return (
		<virtual>
			<aside classes={css.categoryGroup}>
				<h3 classes={css.categoryTitle}>#enterprisejs</h3>
				{enterpriseSummaryItems}
			</aside>
			<aside classes={css.categoryGroup}>
				<h3 classes={css.categoryTitle}>#dojo</h3>
				{dojoSummaryItems}
			</aside>
			<aside classes={css.categoryGroup}>
				<h3 classes={css.categoryTitle}>#podcast</h3>
				<a href="https://talkscript.sitepen.com/">
					<img src="https://wp.sitepen.com/wp-content/uploads//2020/06/logo_TS-wide.svg" />
				</a>
			</aside>
			<aside classes={css.categoryGroup}>
				<h3 classes={css.categoryTitle}>popular categories</h3>
				<ul>
					{popularCategories.map((categorySlug) => {
						const categoryDetails = categories?.find(
							(category) => category.slug === categorySlug
						);
						return (
							<li
								classes={css.popularItem}
								key={`popular-category-link-${categoryDetails?.id}`}
							>
								<Link to="category" params={{ slug: categorySlug }}>
									{categoryDetails?.name}
								</Link>
							</li>
						);
					})}
				</ul>
			</aside>
		</virtual>
	);
});

export default BlogListSidePane;
