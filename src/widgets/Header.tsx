import { create, tsx } from '@dojo/framework/core/vdom';
import * as css from './Header.m.css';
import { ActiveLink } from '@dojo/framework/routing/ActiveLink';
import { Link } from '@dojo/framework/routing/Link';
const sitepenLogo = require('../assets/images/SitePenLogo_Light.svg');

export interface HeaderProperties {}

const factory = create().properties<HeaderProperties>();

export const Header = factory(function Header() {
	return (
		<header id="site-header" classes={css.root}>
			<div classes={css.wrapper}>
				<Link to="home" classes={css.homeLink} title="Home">
					<img loading="lazy" src={sitepenLogo} alt="Sitepen Logo" />
				</Link>
				<nav>
					<ul classes={css.links}>
						<li classes={css.item}>
							<ActiveLink
								classes={css.link}
								to="services"
								activeClasses={[css.active]}
							>
								What we do
							</ActiveLink>
						</li>
						<li classes={css.item}>
							<ActiveLink classes={css.link} to="work" activeClasses={[css.active]}>
								Our work
							</ActiveLink>
						</li>
						<li classes={css.item}>
							<ActiveLink
								classes={css.link}
								to="expertise"
								activeClasses={[css.active]}
							>
								Expertise
							</ActiveLink>
						</li>
						<li classes={css.item}>
							<ActiveLink
								classes={css.link}
								to="contact"
								activeClasses={[css.active]}
							>
								Contact
							</ActiveLink>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
});

export default Header;
