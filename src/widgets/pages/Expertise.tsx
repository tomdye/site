import { create, tsx } from '@dojo/framework/core/vdom';
import { Hero } from '../Hero';
import * as css from './Expertise.m.css';
import * as commonCss from '../../Common.m.css';
import { Summary } from '../Summary';
import { Link } from '@dojo/framework/routing/Link';
import { ConnectStrip } from '../ConnectStrip';
const engineeringImg = require('../../assets/images/services/engineering.svg');
const analysisImg = require('../../assets/images/services/analysis.svg');
const designImg = require('../../assets/images/services/design.svg');
const managementImg = require('../../assets/images/services/management.svg');
const jsLogo = require('../../assets/images/expertise/js.svg');
const vueLogo = require('../../assets/images/expertise/vue.svg');
const nodeLogo = require('../../assets/images/expertise/node.svg');
const tsLogo = require('../../assets/images/expertise/ts.svg');
const dojoLogo = require('../../assets/images/expertise/dojo.svg');
const reactLogo = require('../../assets/images/expertise/react.svg');
const reduxLogo = require('../../assets/images/expertise/redux.svg');
const angularLogo = require('../../assets/images/expertise/angular.svg');

export interface ExpertiseProperties {}

const factory = create().properties<ExpertiseProperties>();

export const Expertise = factory(function Expertise() {
	return (
		<div classes={css.root}>
			<div classes={css.heroWrapper}>
				<div classes={commonCss.contentWrapper}>
					<Hero>
						{{
							title: 'A COMPLETE ENTERPRISE',
							xlTitle: 'DEVELOPMENT TEAM'
						}}
					</Hero>
				</div>
			</div>
			<div classes={commonCss.contentWrapper}>
				<section classes={css.topSection}>
					<div classes={css.leading}>
						<h2 classes={css.topHeading}>
							Building open source tools and sustainable web applications is
							challenging. Real experience is required.
						</h2>
					</div>
					<div classes={css.trailing}>
						<p>
							With nearly two decades at the helm of enterprise web development, our
							project teams have created enterprise-grade tools and technologies based
							on our experience developing mission-critical applications for companies
							worldwide.
						</p>
						<p>
							The enterprise is our customer. We are in the unique position of
							understanding its constraints while simultaneously shaping the standards
							and future of the open web.
						</p>
					</div>
				</section>
			</div>
			<div classes={css.summaryWrapper}>
				<Summary smaller trailingBias>
					{{
						title: 'Web Engineering',
						blurb:
							'Engineering considerations for the enterprise are vast. With an agnostic approach to full-stack JavaScript development, our engineers are adept at quickly understanding challenging business and technical requirements to advise on the right architecture, technical stack, and approach for each customer’s unique business objectives and constraints.',
						image: (
							<img
								loading="lazy"
								src={engineeringImg}
								alt="Illustration of Engineering"
							/>
						)
					}}
				</Summary>
				<Summary smaller trailingBias reverse>
					{{
						title: 'UI | UX Design',
						blurb:
							'Investment in the UI and UX design for enterprise applications goes beyond the user’s experience. Having an enterprise UX designer on your team increases user performance and satisfaction, but it also reduces time spent to deploy a software solution and minimizes the amount of rework on applications.',
						image: (
							<img
								loading="lazy"
								src={designImg}
								alt="Illustration for UI and UX Design"
							/>
						)
					}}
				</Summary>
				<Summary smaller trailingBias>
					{{
						title: 'Business Analysis',
						blurb:
							'Requirements elicitation, prioritization, documentation and validation are essential for efficiency gains everywhere. Our lean approach to business analysis keeps our project teams focused without setbacks from costly assumptions and uncertainty.',
						image: (
							<img
								loading="lazy"
								src={analysisImg}
								alt="Illustration of Business Analysis"
							/>
						)
					}}
				</Summary>
				<Summary smaller trailingBias reverse>
					{{
						title: 'Project Management',
						blurb:
							'Communication. Transparency. Organization. Our technical project management organizes and aligns resources using agile methodologies to execute your vision, strategy, and objectives, propelling your project through to production and beyond.',
						image: (
							<img
								loading="lazy"
								src={managementImg}
								alt="Illustration of Project Management"
							/>
						)
					}}
				</Summary>
				<section classes={css.javascript}>
					<h2 classes={css.jsHeading}>Expertise with the JavaScript Ecosystem</h2>
					<ul classes={css.jsList}>
						<li>
							<img
								classes={css.jsImg}
								loading="lazy"
								src={jsLogo}
								alt="logo for js"
							/>
						</li>
						<li>
							<img
								classes={css.jsImg}
								loading="lazy"
								src={vueLogo}
								alt="logo for vue"
							/>
						</li>
						<li>
							<img
								classes={css.jsImg}
								loading="lazy"
								src={nodeLogo}
								alt="logo for node"
							/>
						</li>
						<li>
							<img
								classes={css.jsImg}
								loading="lazy"
								src={tsLogo}
								alt="logo for typescript"
							/>
						</li>
						<li>
							<img
								classes={css.jsImg}
								loading="lazy"
								src={dojoLogo}
								alt="logo for dojo"
							/>
						</li>
						<li>
							<img
								classes={css.jsImg}
								loading="lazy"
								src={reactLogo}
								alt="logo for react"
							/>
						</li>
						<li>
							<img
								classes={css.jsImg}
								loading="lazy"
								src={reduxLogo}
								alt="logo for redux"
							/>
						</li>
						<li>
							<img
								classes={css.jsImg}
								loading="lazy"
								src={angularLogo}
								alt="logo for angular"
							/>
						</li>
					</ul>
					<p>
						With SitePen as your partner you can be confident that you will create
						well-designed, performant and sustainable web applications the right way the
						first time. With JavaScript and{' '}
						<a
							href="https://www.sitepen.com/blog/update-the-definitive-typescript-guide/"
							target="_blank"
							rel="noopener"
						>
							TypeScript
						</a>{' '}
						as our core technologies, we choose and utilize web frameworks and the
						extended JavaScript ecosystem to build out solutions that deliver for your
						organization. We are <Link to="about">thought leaders</Link> in enterprise
						application and cloud platform development services, and can provide our
						technical expertise to you at any point in the product and software
						development lifecycles.
					</p>
				</section>
			</div>
			<ConnectStrip variant="leverage" />
		</div>
	);
});

export default Expertise;
