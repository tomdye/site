import { create, tsx } from '@dojo/framework/core/vdom';
import { Hero } from '../Hero';
import * as commonCss from '../../Common.m.css';
import * as css from './Error404.m.css';
import { ConnectStrip } from '../ConnectStrip';
import { Link } from '@dojo/framework/routing/Link';

const factory = create();

export const Error404 = factory(function Error404() {
	return (
		<virtual>
			<head>
				<title>Page not found | SitePen</title>
				<meta name="robots" content="noindex, follow" />
				<meta property="og:locale" content="en_US" />
				<meta property="og:title" content="Page not found | SitePen" />
				<meta property="og:site_name" content="SitePen" />
			</head>
			<div classes={css.heroWrapper}>
				<div classes={commonCss.contentWrapper}>
					<Hero>
						{{
							title: 'Error 404',
							xlTitle: `PAGE NOT FOUND`,
							blurb: (
								<form
									action="/blog/search"
									method="get"
									classes={css.searchInputWrapper}
								>
									<input
										id="term"
										name="term"
										classes={css.searchInput}
										type="search"
										placeholder="Search our blogs..."
									/>
									<i title="search" classes={[css.searchIcon, 'icon-search']}></i>
								</form>
							)
						}}
					</Hero>
				</div>
			</div>
			<section classes={css.otherPages}>
				<div classes={commonCss.contentWrapper}>
					<h3>Please try another page...</h3>
					<ul classes={css.pageList}>
						<li>
							<Link classes={[css.pageItem, css.what]} to="services">
								What We Do
							</Link>
						</li>
						<li>
							<Link classes={[css.pageItem, css.work]} to="work">
								Our Work
							</Link>
						</li>
						<li>
							<Link classes={[css.pageItem, css.blog]} to="blog">
								Blog
							</Link>
						</li>
						<li>
							<Link classes={[css.pageItem, css.contact]} to="contact">
								Contact
							</Link>
						</li>
					</ul>
				</div>
			</section>
			<ConnectStrip />
		</virtual>
	);
});

export default Error404;
