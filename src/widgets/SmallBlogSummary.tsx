import { create, tsx } from '@dojo/framework/core/vdom';
import * as css from './SmallBlogSummary.m.css';
import { RenderResult } from '@dojo/framework/core/interfaces';
import { Link } from '@dojo/framework/routing/Link';

export interface SmallBlogSummaryProperties {
	slug: string;
}

export interface SmallBlogSummaryChildren {
	image: RenderResult;
	title: string;
	date: string;
}

const factory = create()
	.properties<SmallBlogSummaryProperties>()
	.children<SmallBlogSummaryChildren>();

export const SmallBlogSummary = factory(function SmallBlogSummary({ children, properties }) {
	const [{ image, title, date }] = children();
	const { slug } = properties();

	return (
		<Link to="blogPage" params={{ slugOrPage: slug }} title={title}>
			<article classes={css.root}>
				<div classes={css.imageWrapper}>{image}</div>
				<div classes={css.trailing}>
					<h2 classes={css.title} innerHTML={title}></h2>
					<h3 classes={css.date}>{`${new Date(date).toLocaleDateString(undefined, {
						month: 'long',
						day: 'numeric',
						year: 'numeric'
					})}`}</h3>
				</div>
			</article>
		</Link>
	);
});

export default SmallBlogSummary;
