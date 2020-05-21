import { create, tsx } from '@dojo/framework/core/vdom';
import * as css from './Header.m.css';
import { ActiveLink } from '@dojo/framework/routing/ActiveLink';
import { Link } from '@dojo/framework/routing/Link';
import { GlobalEvent } from '@dojo/widgets/global-event';
import { createICacheMiddleware } from '@dojo/framework/core/middleware/icache';
const sitepenLogo = require('../assets/images/SitePenLogo_Light.svg');

export interface HeaderProperties {}

interface HeaderState {
	scrolled: boolean;
}

const factory = create({ icache: createICacheMiddleware<HeaderState>() }).properties<
	HeaderProperties
>();

export const Header = factory(function Header({ middleware: { icache } }) {
	const scrolled = icache.getOrSet('scrolled', false);

	return (
		<header classes={[css.root, scrolled && css.scrolled]}>
			<GlobalEvent
				document={{
					scroll: () => {
						const isScrolled = window.scrollY > 0;
						if (scrolled !== isScrolled) {
							icache.set('scrolled', isScrolled);
						}
					}
				}}
			/>
			<div classes={css.wrapper}>
				<Link to="home" classes={css.homeLink}>
					<img src={sitepenLogo} />
				</Link>
				<nav>
					<ul classes={css.links}>
						<li classes={css.item}>
							<ActiveLink to="services" activeClasses={[css.active]}>
								What we do
							</ActiveLink>
						</li>
						<li classes={css.item}>
							<ActiveLink to="work" activeClasses={[css.active]}>
								Our work
							</ActiveLink>
						</li>
						<li classes={css.item}>
							<ActiveLink to="expertise" activeClasses={[css.active]}>
								Expertise
							</ActiveLink>
						</li>
						<li classes={css.item}>
							<ActiveLink to="contact" activeClasses={[css.active]}>
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
