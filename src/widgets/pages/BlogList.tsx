import { create, tsx } from '@dojo/framework/core/vdom';
import * as commonCss from '../../Common.m.css';
import * as css from './BlogList.m.css';
import { BlogSummary } from '../BlogSummary';
import SmallBlogSummary from '../SmallBlogSummary';
import block from '@dojo/framework/core/middleware/block';
import getBlogPreviews, { BlogPreview } from '../../blocks/wp-blog-previews.block';
import { RenderResult } from '@dojo/framework/core/interfaces';
import { Link } from '@dojo/framework/routing/Link';

export interface BlogListProperties {
	page: number;
}

const factory = create({ block }).properties<BlogListProperties>();

export const BlogList = factory(function Blog({ properties, middleware: { block } }) {
	const { page } = properties();
	const previews = block(getBlogPreviews)('https://wp.sitepen.com', 12, page);
	const dojoPreviews = block(getBlogPreviews)('https://wp.sitepen.com', 3, 1, 'dojo');
	const enterprisePreviews = block(getBlogPreviews)(
		'https://wp.sitepen.com',
		3,
		1,
		'enterprisejs'
	);

	let blogSummaryItems: RenderResult[] = [];
	let dojoSummaryItems: RenderResult[] = [];
	let enterpriseSummaryItems: RenderResult[] = [];
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
		<div classes={css.root}>
			<div classes={css.spacer}></div>
			<div classes={commonCss.contentWrapper}>
				<section classes={css.content}>
					<div classes={css.leading}>
						<ul classes={css.blogList}>{blogSummaryItems}</ul>
						{pagination}
					</div>
					<div classes={css.trailing}>
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
								<li>Angular</li>
								<li>Dojo</li>
								<li>Dojo Toolkit</li>
								<li>Node.js</li>
								<li>React</li>
								<li>Vue</li>
							</ul>
						</aside>
					</div>
				</section>
			</div>
		</div>
	);
});

export default BlogList;
