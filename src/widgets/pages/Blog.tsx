import { create, tsx } from '@dojo/framework/core/vdom';
import * as commonCss from '../../Common.m.css';
import * as css from './Blog.m.css';
import block from '@dojo/framework/core/middleware/block';
import getBlog from '../../blocks/wp-blog.block';
import getBlogPreviews, { BlogPreview } from '../../blocks/wp-blog-previews.block';
import getCategories from '../../blocks/wp-blog-category.block';
import { RenderResult } from '@dojo/framework/core/interfaces';
import { SmallBlogSummary } from '../SmallBlogSummary';
import { Summary } from '../Summary';
import { ConnectButton } from '../ConnectButton';
import { Share } from '../Share';
import getSeries from '../../blocks/wp-blog-series.block';
import { Link } from '@dojo/framework/routing/Link';
const ctaImg = require('../../assets/images/services/management.png');

export interface BlogProperties {
	slug: string;
}

const factory = create({ block }).properties<BlogProperties>();

export const Blog = factory(function Blog({ properties, middleware: { block } }) {
	const { slug } = properties();
	const post = block(getBlog)('https://wp.sitepen.com', slug);
	const previews = block(getBlogPreviews)('https://wp.sitepen.com', 7, 1);
	const categories = block(getCategories)('https://wp.sitepen.com');
	const series = block(getSeries)('https://wp.sitepen.com');

	let summaryItems: RenderResult[] = [];

	const partOfSeries = post?.series && post.series.length > 0;

	function renderCategoryItem(categoryId: number) {
		const categoryDetails = categories?.find((category) => category.id === categoryId);
		if (categoryDetails) {
			const { name, id, slug } = categoryDetails;
			return (
				<li key={`category-${id}`}>
					<Link classes={css.categoryItem} to="category" params={{ slug }}>
						{name}
					</Link>
				</li>
			);
		}
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

	if (previews) {
		const { blogPreviews } = previews;
		summaryItems = blogPreviews
			.filter((preview) => preview.slug !== slug)
			.splice(0, 6)
			.map(renderSmallSummary);
	}

	if (post) {
		return (
			<div classes={css.root}>
				<head>{post.meta}</head>
				<div classes={css.spacer}></div>
				<Share href={post.link} postId={post.id} title={post.title} />
				<div classes={commonCss.contentWrapper}>
					<section classes={css.wrapper}>
						<article classes={css.leading}>
							<h1 classes={css.title} innerHTML={post.title}></h1>
							<div classes={css.meta}>
								<span>{post.author}</span> |{' '}
								<span>{`${new Date(post.date).toLocaleDateString(undefined, {
									month: 'long',
									day: 'numeric',
									year: 'numeric'
								})}`}</span>
							</div>
							<img src={post.image} />
							<ul classes={css.categoryList}>
								{post.categories.map(renderCategoryItem)}
							</ul>
							<div
								classes={[css.content, 'post-content']}
								innerHTML={post.content}
							></div>
						</article>
						<div classes={css.trailing}>
							<aside classes={css.previews}>
								<h3 classes={css.previewHeading}>latest articles</h3>
								{summaryItems}
							</aside>
							{partOfSeries && (
								<aside classes={css.previews}>
									<h3 classes={css.previewHeading}>part of series</h3>
									{post.series.map((seriesId) => {
										const seriesPreviews = block(
											getBlogPreviews
										)('https://wp.sitepen.com', 100, 1, { series: seriesId });
										if (seriesPreviews) {
											const seriesDetails = series?.find(
												(series) => series.id === seriesId
											);
											return (
												seriesDetails && (
													<div classes={css.seriesGroup}>
														<h4 classes={css.seriesTitle}>
															<Link
																to="series"
																params={{
																	slug: seriesDetails.slug
																}}
															>
																{seriesDetails.name}
															</Link>
														</h4>
														{seriesPreviews.blogPreviews
															.reverse()
															.filter(
																(blog) => blog.slug !== post.slug
															)
															.map(renderSmallSummary)}
													</div>
												)
											);
										}
									})}
								</aside>
							)}
						</div>
					</section>
					<Summary smaller reverse>
						{{
							title: (
								<span classes={css.outroTitle}>
									Learn more about how SitePen can be your partner.
								</span>
							),
							blurb: (
								<virtual>
									<p>
										SitePen is a strategic consultancy committed to achieving
										technical objectives, solving critical business problems and
										helping our customers build web applications the right way,
										the first time.
									</p>
									<div classes={css.connectButtonWrapper}>
										<ConnectButton cta />
									</div>
								</virtual>
							),
							image: (
								<img
									classes={css.ctaImage}
									loading="lazy"
									src={ctaImg}
									alt="Illustration for call to action"
								/>
							)
						}}
					</Summary>
				</div>
			</div>
		);
	}
});

export default Blog;
