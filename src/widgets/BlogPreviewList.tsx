import { create, tsx } from '@dojo/framework/core/vdom';
import * as css from './BlogPreviewList.m.css';
import { BlogSummary } from './BlogSummary';
import { BlogPreview } from '../blocks/wp-blog-previews.block';

export interface BlogPreviewListProperties {
	previews: BlogPreview[];
}

const factory = create().properties<BlogPreviewListProperties>();

export const BlogPreviewList = factory(function BlogPreviewList({ properties }) {
	const { previews: blogPreviews } = properties();

	return (
		<ul classes={css.root}>
			{blogPreviews.map((preview) => {
				return (
					<li key={`blog-${preview.id}`} classes={css.item}>
						<BlogSummary slug={preview.slug}>
							{{
								title: preview.title,
								author: preview.author,
								date: preview.date,
								blurb: preview.excerpt,
								image: preview.image && (
									<img alt={preview.title} src={preview.image} />
								)
							}}
						</BlogSummary>
					</li>
				);
			})}
		</ul>
	);
});

export default BlogPreviewList;
