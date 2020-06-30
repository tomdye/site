import { create, tsx } from '@dojo/framework/core/vdom';
import * as css from './BlogSummary.m.css';
import { RenderResult } from '@dojo/framework/core/interfaces';
import { Link } from '@dojo/framework/routing/Link';

export interface BlogSummaryProperties {
	slug: string;
}

export interface BlogSummaryChildren {
	blurb: string;
	image: RenderResult;
	title: string;
	date: string;
	author: string;
}

const factory = create().properties<BlogSummaryProperties>().children<BlogSummaryChildren>();

export const BlogSummary = factory(function BlogSummary({ children, properties }) {
	const [{ blurb, image, title, author, date }] = children();
	const { slug } = properties();

	return (
		<article classes={css.root}>
			<Link to="blogPage" params={{ slugOrPage: slug }} classes={css.imageWrapper}>
				{image}
			</Link>
			<Link to="blogPage" params={{ slugOrPage: slug }}>
				<h2 classes={css.title} innerHTML={title}></h2>
			</Link>
			<h3 classes={css.subtitle}>
				<span>{author}</span> |{' '}
				<span>{`${new Date(date).toLocaleDateString(undefined, {
					month: 'long',
					day: 'numeric',
					year: 'numeric'
				})}`}</span>
			</h3>
			<div classes={css.blurb} innerHTML={blurb}></div>
			<Link
				classes={css.link}
				to="blogPage"
				params={{ slugOrPage: slug }}
				title={`Read more about blog titled: ${title}`}
			>{`Read More >>`}</Link>
		</article>
	);
});

export default BlogSummary;
