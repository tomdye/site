import harness from '@dojo/framework/testing/harness';
import { tsx } from '@dojo/framework/core/vdom';
import Link from '@dojo/framework/routing/ActiveLink';
import Registry from '@dojo/framework/core/Registry';
import Router from '@dojo/framework/routing/Router';
import { MemoryHistory } from '@dojo/framework/routing/history/MemoryHistory';

const logo = require('../../../src/assets/logo.svg');

import SideMenuItem from '../../menu/SideMenuItem';
import SideMenuItemList from '../../menu/SideMenuItemList';
import ReferenceGuideMenu from '../../reference-guides/ReferenceGuideMenu';

import Header from '../Header';
import * as css from '../Header.m.css';
import assertionTemplate from '@dojo/framework/testing/assertionTemplate';

const registry = new Registry();

const router = new Router(
	[
		{
			path: 'foo',
			outlet: 'foo',
			children: [
				{
					path: 'bar',
					outlet: 'bar'
				}
			]
		},
		{
			path: 'other',
			outlet: 'other'
		},
		{
			path: 'param',
			outlet: 'param',
			children: [
				{
					path: '{suffix}',
					outlet: 'suffixed-param'
				}
			]
		}
	],
	{ HistoryManager: MemoryHistory }
);

registry.defineInjector('router', () => () => router);

describe('Menu', () => {
	const baseAssertion = assertionTemplate(() => (
		<header key="root" classes={css.root}>
			<input id="mainMenuToggle" classes={css.mainMenuToggle} type="checkbox" />
			<div classes={[css.left]}>
				<span classes={css.leftContainer}>
					<label for="mainMenuToggle" key="toggleButton" classes={css.toggleButton}>
						<span classes={css.srOnly}>Menu</span>
						<div classes={css.toggleBar} />
					</label>
				</span>
				<span classes={[css.centerContainer]}>
					<Link key="homeLink" classes={[css.homeLink]} to="home" activeClasses={[css.selected]}>
						<img classes={[css.logo]} alt="logo" src={logo} />
					</Link>
				</span>
				<span classes={[css.rightContainer]} />
			</div>
			<nav role="navigation" classes={[css.menu]} aria-label="Main Menu">
				<SideMenuItemList classes={{ 'dojo.io/SideMenuItemList': { root: [css.menuList] } }}>
					<SideMenuItem
						to="blog"
						classes={{ 'dojo.io/SideMenuItem': { root: [css.menuItem, undefined], link: [css.link] } }}
						inverse
					>
						Blog
					</SideMenuItem>
					<SideMenuItem
						name="Reference Guides"
						classes={{
							'dojo.io/SideMenuItem': { root: [css.menuItem, css.smallScreenOnly], link: [css.link] }
						}}
						inverse
					>
						<ReferenceGuideMenu
							name="i18n"
							route="reference-guide-i18n"
							repo="dojo/framework"
							path="docs/:locale:/i18n"
							standaloneMenu={false}
						/>
						<ReferenceGuideMenu
							name="Styling and Theming"
							route="reference-guide-styling-and-theming"
							repo="dojo/framework"
							path="docs/:locale:/styling-and-theming"
							standaloneMenu={false}
						/>
						<ReferenceGuideMenu
							name="Routing"
							route="reference-guide-routing"
							repo="dojo/framework"
							path="docs/:locale:/routing"
							standaloneMenu={false}
						/>
					</SideMenuItem>
					<SideMenuItem
						to="reference-guides"
						classes={{
							'dojo.io/SideMenuItem': { root: [css.menuItem, css.noSmallScreen], link: [css.link] }
						}}
						inverse
					>
						Reference Guides
					</SideMenuItem>
					<SideMenuItem
						to="examples"
						classes={{ 'dojo.io/SideMenuItem': { root: [css.menuItem, undefined], link: [css.link] } }}
						inverse
					>
						Examples
					</SideMenuItem>
					<SideMenuItem
						to="playground"
						classes={{ 'dojo.io/SideMenuItem': { root: [css.menuItem, undefined], link: [css.link] } }}
						inverse
					>
						Playground
					</SideMenuItem>
					<SideMenuItem
						to="roadmap"
						classes={{ 'dojo.io/SideMenuItem': { root: [css.menuItem, undefined], link: [css.link] } }}
						inverse
					>
						Roadmap
					</SideMenuItem>
					<SideMenuItem
						to="community"
						classes={{ 'dojo.io/SideMenuItem': { root: [css.menuItem, undefined], link: [css.link] } }}
						inverse
					>
						Community
					</SideMenuItem>
				</SideMenuItemList>
			</nav>
		</header>
	));

	it('renders', () => {
		const h = harness(() => <Header />);
		h.expect(baseAssertion);
	});
});
