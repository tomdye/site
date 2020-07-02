import { create, tsx } from '@dojo/framework/core/vdom';
import * as css from './Footer.m.css';
import { Link } from '@dojo/framework/routing/Link';

const factory = create();

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
								<a
									classes={css.link}
									href="https://blog.sitepen.com/learn-typescript-best-practices-at-tsconf/"
								>
									TS Conf
								</a>
							</li>
							<li classes={css.item}>
								<a classes={css.link} href="https://talkscript.sitepen.com/">
									Talkscript.fm
								</a>
							</li>
							<li classes={css.item}>
								<a classes={css.link} href="https://milestonemayhem.com/">
									Milestone Mayhem
								</a>
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
							<a classes={css.link} href="/rss.xml">
								<i title="rss-feed" classes="icon-rss"></i>
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
