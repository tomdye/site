import { create, tsx } from '@dojo/framework/core/vdom';
import { Hero } from '../Hero';
import * as css from './Services.m.css';
import * as commonCss from '../../Common.m.css';
import { ConnectStrip } from '../ConnectStrip';
import { Link } from '@dojo/framework/routing/Link';
import { Summary } from '../Summary';
const elevateIcon = require('../../assets/images/icons/elevate.svg');
const guideIcon = require('../../assets/images/icons/guide.svg');
const communicationIcon = require('../../assets/images/icons/communication.svg');
const knowledgeIcon = require('../../assets/images/icons/knowledge.svg');
const fannieLogo = require('../../assets/images/logos/fannie.svg');
const marriottLogo = require('../../assets/images/logos/marriott.svg');
const builtLogo = require('../../assets/images/logos/built.png');
const angularLogo = require('../../assets/images/logos/angular.svg');
const dojoLogo = require('../../assets/images/logos/dojo.svg');
const reactLogo = require('../../assets/images/logos/react.svg');
const completeImg = require('../../assets/images/services/complete.svg');
const holisticImg = require('../../assets/images/services/holistic.svg');
const agileImg = require('../../assets/images/services/agile.svg');

export interface ServicesProperties {}

const factory = create().properties<ServicesProperties>();

export const Services = factory(function Services() {
	return (
		<div classes={css.root}>
			<div classes={css.heroWrapper}>
				<div classes={commonCss.contentWrapper}>
					<Hero>
						{{
							title: 'ACHIEVE YOUR WEB APP DEVELOPMENT GOALS',
							xlTitle: 'WITH CONFIDENCE'
						}}
					</Hero>
				</div>
			</div>
			<div classes={css.shadow}>
				<div classes={commonCss.contentWrapper}>
					<section classes={css.topSection}>
						<div classes={css.leading}>
							<h2>
								Developing enterprise web applications requires a lot more than an
								office-full of developers waiting for instructions.
							</h2>
						</div>
						<div classes={css.trailing}>
							<p>You need an agile team who is constantly moving forward to:</p>
							<ul>
								<li>
									<img src={elevateIcon} /> Elevate your technical capabilities
								</li>
								<li>
									<img src={guideIcon} /> Guide significant decisions
								</li>
								<li>
									<img src={communicationIcon} /> Keep communication frequent and
									open
								</li>
								<li>
									<img src={knowledgeIcon} /> Share knowledge about the right
									tech, tools, and standards
								</li>
							</ul>
							<p>
								All of this to establish a healthy velocity to get your app through
								to production as efficiently as possible.
							</p>
							<p>
								As{' '}
								<Link to="about">leaders in enterprise development services</Link>{' '}
								and with our position at the forefront of the modern web, we offer a
								partnership that will optimize your approach in all areas of
								development and instill confidence in meeting your company’s
								objectives.
							</p>
						</div>
					</section>
					<section classes={css.resultsSection}>
						<h3>YOU CAN EXPECT RESULTS</h3>
						<ul>
							<li>
								<div classes={css.clientLogoWrapper}>
									<img src={fannieLogo} alt="FannieMae Logo" />
								</div>
								<p>
									When Fannie Mae needed to launch a mission-critical trading
									platform with limited resources, they turned to us to provide
									leadership, design, development, and DevOps improvements.
								</p>
								<p classes={css.builtWith}>built with</p>
								<img classes={css.techLogo} src={angularLogo} alt="Angular Logo" />
							</li>
							<li>
								<div classes={css.clientLogoWrapper}>
									<img src={marriottLogo} alt="Marriott Logo" />
								</div>
								<p>
									When Marriott found themselves underperforming and bogged down
									with technical debt, we provided technical leadership, feature
									development, and mentoring to optimize application performance.
								</p>
								<p classes={css.builtWith}>built with</p>
								<img classes={css.techLogo} src={dojoLogo} alt="Dojo Logo" />
							</li>
							<li>
								<div classes={css.clientLogoWrapper}>
									<img src={builtLogo} alt="Built Logo" />
								</div>
								<p>
									When Built lost their patience with an unstable legacy app, they
									partnered with us to stabilize the existing legacy application
									and develop a next-gen application at the same time.
								</p>
								<p classes={css.builtWith}>built with</p>
								<img classes={css.techLogo} src={reactLogo} alt="React Logo" />
							</li>
						</ul>
					</section>
				</div>
			</div>
			<div classes={css.successWrapper}>
				<section classes={css.successSection}>
					<h2 classes={css.heading}>We Will Drive Your Success</h2>
					<Summary smaller>
						{{
							title: 'Complete Team',
							blurb: (
								<span>
									Receive trusted guidance from our{' '}
									<Link to="expertise">complete cross-functional team</Link> on
									all aspects of agile development: Strategy, planning, business
									analysis, architecture, design, and development.
								</span>
							),
							image: <img src={completeImg} alt="Illustration for Complete Team" />
						}}
					</Summary>
					<Summary smaller reverse>
						{{
							title: 'Holistic Approach',
							blurb: (
								<span>
									Rely on a <Link to="home">partner</Link> who won’t follow
									blindly but instead considers your big-picture goals in every
									task. We work with you to address your entire situation and
									produce exceptional problem-solving results.
								</span>
							),
							image: (
								<img src={holisticImg} alt="Illustration for Holistic Approach" />
							)
						}}
					</Summary>
					<Summary smaller>
						{{
							title: 'Agile Methodologies',
							blurb:
								'Conquer the complexities of building and scaling enterprise-level applications with a lean, agile process that effectively delivers on all of your requirements.',
							image: <img src={agileImg} alt="Illustration for Agile Methodologies" />
						}}
					</Summary>
				</section>
			</div>
			<ConnectStrip variant="expertise" />
			<ConnectStrip />
		</div>
	);
});

export default Services;
