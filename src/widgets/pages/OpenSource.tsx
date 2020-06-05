import { create, tsx } from '@dojo/framework/core/vdom';
import { Hero } from '../Hero';
import * as css from './OpenSource.m.css';
import * as commonCss from '../../Common.m.css';
import { Summary } from '../Summary';
import { Link } from '@dojo/framework/routing/Link';
import { ConnectStrip } from '../ConnectStrip';
const dojoLogo = require('../../assets/images/oss/large/dojo.svg');
const internLogo = require('../../assets/images/oss/large/intern.svg');
const dgridLogo = require('../../assets/images/oss/large/dgrid.svg');
const dojoToolkitLogo = require('../../assets/images/oss/large/dojoToolkit.svg');
const tsLogo = require('../../assets/images/oss/large/ts.svg');

export interface OpenSourceProperties {}

const factory = create().properties<OpenSourceProperties>();

export const OpenSource = factory(function OpenSource() {
	return (
		<div classes={css.root}>
			<div classes={[css.heroWrapper, css.indexHeroWrapper]}>
				<div classes={commonCss.contentWrapper}>
					<Hero>
						{{
							title: 'COMMITMENT TO',
							xlTitle: 'OPEN SOURCE SOFTWARE',
							blurb: `Collaboration | Commitment | Community`
						}}
					</Hero>
				</div>
			</div>
			<div classes={commonCss.smallerContentWrapper}>
				<h2 classes={[commonCss.heading, commonCss.centered]}>
					Open Source Software Contributions
				</h2>
				<p classes={css.intro}>
					We are lifelong advocates of open source software and have harnessed its
					benefits since the early days of JavaScript. We bring engineers from around the
					world together to collaborate, create and contribute so that better tools may
					continue to flourish — in the open. Here are some of the open source projects
					that we contribute to and support:
				</p>
			</div>
			<div classes={commonCss.smallerContentWrapper}>
				<Summary smaller reverse>
					{{
						title: 'Dojo Framework',
						blurb: (
							<virtual>
								<p>
									A modern, reactive TypeScript framework for building robust,
									enterprise-grade web applications.
								</p>
								<Link to="opensourceDojo" classes={commonCss.linkButton}>
									learn more
								</Link>
							</virtual>
						),
						image: <img classes={css.logo} src={dojoLogo} alt="Dojo Framework Logo" />
					}}
				</Summary>
				<Summary smaller>
					{{
						title: 'Intern',
						blurb: (
							<virtual>
								<p>
									An all-in-one solution for full-lifecycle testing of JavaScript
									and TypeScript applications in Node and modern browsers.
								</p>
								<Link to="opensourceIntern" classes={commonCss.linkButton}>
									learn more
								</Link>
							</virtual>
						),
						image: <img classes={css.logo} src={internLogo} alt="Intern Logo" />
					}}
				</Summary>
				<Summary smaller reverse>
					{{
						title: 'dgrid',
						blurb: (
							<virtual>
								<p>
									A comprehensive, responsive, and modular data grid. Performant,
									scalable and embeddable within any application or framework
									including React and Angular.
								</p>
								<Link to="opensourceDgrid" classes={commonCss.linkButton}>
									learn more
								</Link>
							</virtual>
						),
						image: <img classes={css.logo} src={dgridLogo} alt="dgrid Framework Logo" />
					}}
				</Summary>
				<Summary smaller>
					{{
						title: 'Dojo Toolkit',
						blurb: (
							<virtual>
								<p>
									A full-featured JavaScript toolkit focused on the enterprise,
									supporting modern and legacy browsers and applications since
									2004.
								</p>
								<Link to="opensourceDojoToolkit" classes={commonCss.linkButton}>
									learn more
								</Link>
							</virtual>
						),
						image: (
							<img classes={css.logo} src={dojoToolkitLogo} alt="Dojo Toolkit Logo" />
						)
					}}
				</Summary>
				<Summary smaller reverse>
					{{
						title: 'TypeScript',
						blurb: (
							<virtual>
								<p>
									A typed superset of JavaScript that compiles to plain
									JavaScript. Works with any browser, any host, any OS, and is
									fully open source.
								</p>
								<Link to="opensourceTypescript" classes={commonCss.linkButton}>
									learn more
								</Link>
							</virtual>
						),
						image: <img classes={css.logo} src={tsLogo} alt="Typescript Logo" />
					}}
				</Summary>
			</div>
			<ConnectStrip />
		</div>
	);
});

export default OpenSource;
