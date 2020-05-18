import { create, tsx } from '@dojo/framework/core/vdom';
import * as css from './Header.m.css';
import { ActiveLink } from '@dojo/framework/routing/ActiveLink';
import { Link } from '@dojo/framework/routing/Link';
const spLogo = require('../assets/images/SitePenLogo_Light.svg');

export interface HeaderProperties {}

const factory = create().properties<HeaderProperties>();

export const Header = factory(function Header({}) {
	return (
		<header classes={css.root}>
			<div classes={css.wrapper}>
				<Link to="home">
					<img src={spLogo} />
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
