import { create, tsx } from '@dojo/framework/core/vdom';
import * as css from './Footer.m.css';
import { Link } from '@dojo/framework/routing/Link';

export interface FooterProperties {}

const factory = create().properties<FooterProperties>();

export const Footer = factory(function Footer() {
	return (
		<footer classes={css.root}>
			<section classes={css.top}>
				<div classes={css.wrapper}>
					<nav>
						<ul classes={css.links}>
							<li classes={css.item}>
								<Link classes={css.link} to="about">
									About
								</Link>
							</li>
							<li classes={css.item}>
								<Link classes={css.link} to="careers">
									Careers
								</Link>
							</li>
							<li classes={css.item}>
								<Link classes={css.link} to="opensource">
									Open Source
								</Link>
							</li>
							<li classes={css.item}>
								<a classes={css.link}>TS Conf</a>
							</li>
							<li classes={css.item}>
								<a classes={css.link}>Talkscript.fm</a>
							</li>
							<li classes={css.item}>
								<a classes={css.link}>Milestone Mayhem</a>
							</li>
							<li classes={css.item}>
								<Link classes={css.link} to="contact">
									Contact
								</Link>
							</li>
						</ul>
					</nav>
					<ul classes={css.social}>
						<li classes={css.item}>
							<a
								classes={css.link}
								href="https://www.facebook.com/SitePen"
								target="_blank"
								rel="noopener"
							>
								<i title="facebook" classes="icon-facebook"></i>
							</a>
						</li>
						<li classes={css.item}>
							<a
								classes={css.link}
								href="https://twitter.com/sitepen"
								target="_blank"
								rel="noopener"
							>
								<i title="twitter" classes="icon-twitter"></i>
							</a>
						</li>
						<li classes={css.item}>
							<a
								classes={css.link}
								href="https://www.linkedin.com/company/sitepen-inc-"
								target="_blank"
								rel="noopener"
							>
								<i title="linkedin" classes="icon-linkedin"></i>
							</a>
						</li>
						<li classes={css.item}>
							<a
								classes={css.link}
								href="https://www.sitepen.com/feed/"
								target="_blank"
								rel="noopener"
							>
								<i title="rss" classes="icon-rss"></i>
							</a>
						</li>
					</ul>
				</div>
			</section>
			<section classes={css.bottom}>
				<div classes={css.wrapper}>
					<span>© 2020 SitePen, Inc. All Rights Reserved.</span>
					<Link classes={css.link} to="privacy">
						Privacy Policy
					</Link>
				</div>
			</section>
		</footer>
	);
});

export default Footer;
