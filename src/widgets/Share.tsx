import { create, tsx } from '@dojo/framework/core/vdom';
import * as css from './Share.m.css';

export interface ShareProperties {
	href: string;
	postId: string;
	title: string;
}

const factory = create().properties<ShareProperties>();

export const Share = factory(function Share({ children, properties }) {
	const { href, postId, title } = properties();

	const facebookHref = `http://www.facebook.com/sharer.php?u=${encodeURIComponent(
		href
	)}&t=${encodeURIComponent(title)}`;
	const twitterHref = `http://twitter.com/share?text=${encodeURIComponent(
		title
	)}&url=${encodeURIComponent(href)}&via=SitePen`;
	const linkedinHref = `http://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
		href
	)}&title=${encodeURIComponent(title)}`;

	return (
		<div classes={css.root}>
			<ul classes={css.list}>
				<li classes={css.item}>
					<a
						classes={[css.link, css.facebook]}
						href={facebookHref}
						target="_blank"
						rel="nofollow"
						data-social_name="facebook"
						data-post_id={postId}
						data-social_type="share"
						data-location="sidebar"
					>
						<i title="facebook" classes="icon-facebook"></i>
					</a>
				</li>
				<li classes={css.item}>
					<a
						classes={[css.link, css.twitter]}
						href={twitterHref}
						target="_blank"
						rel="nofollow"
						data-social_name="twitter"
						data-post_id={postId}
						data-social_type="share"
						data-location="sidebar"
					>
						<i title="twitter" classes="icon-twitter"></i>
					</a>
				</li>
				<li classes={css.item}>
					<a
						classes={[css.link, css.linkedin]}
						href={linkedinHref}
						target="_blank"
						rel="nofollow"
						data-social_name="linkedin"
						data-post_id={postId}
						data-social_type="share"
						data-location="sidebar"
					>
						<i title="linkedin" classes="icon-linkedin"></i>
					</a>
				</li>
			</ul>
		</div>
	);
});

export default Share;
