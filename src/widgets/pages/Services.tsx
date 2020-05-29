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
const agileIcon = require('../../assets/images/icons/agile.svg');
const prototypeIcon = require('../../assets/images/icons/prototype.svg');
const enterpriseIcon = require('../../assets/images/icons/enterprise.svg');
const fullstackIcon = require('../../assets/images/icons/fullstack.svg');
const performanceIcon = require('../../assets/images/icons/performance.svg');
const qualityIcon = require('../../assets/images/icons/quality.svg');
const devopsIcon = require('../../assets/images/icons/devops.svg');
const approachIcon = require('../../assets/images/icons/approach.svg');
const technologyIcon = require('../../assets/images/icons/technology.svg');
const legacyIcon = require('../../assets/images/icons/legacy.svg');
const deliveryIcon = require('../../assets/images/icons/delivery.svg');
const fannieLogo = require('../../assets/images/logos/fannie.svg');
const marriottLogo = require('../../assets/images/logos/marriott.svg');
const builtLogo = require('../../assets/images/logos/built.png');
const angularLogo = require('../../assets/images/logos/angular.svg');
const dojoLogo = require('../../assets/images/logos/dojo.svg');
const reactLogo = require('../../assets/images/logos/react.svg');
const completeImg = require('../../assets/images/services/complete.svg');
const holisticImg = require('../../assets/images/services/holistic.svg');
const agileImg = require('../../assets/images/services/agile.svg');
const devImg = require('../../assets/images/services/dev.svg');
const consultingImg = require('../../assets/images/services/consulting.svg');

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
						<div classes={[css.trailing, css.listSummary]}>
							<p>You need an agile team who is constantly moving forward to:</p>
							<ul classes={css.iconList}>
								<li>
									<img src={elevateIcon} alt="elevate icon" /> Elevate your
									technical capabilities
								</li>
								<li>
									<img src={guideIcon} alt="guide icon" /> Guide significant
									decisions
								</li>
								<li>
									<img src={communicationIcon} alt="communication icon" /> Keep
									communication frequent and open
								</li>
								<li>
									<img src={knowledgeIcon} alt="knowledge icon" /> Share knowledge
									about the right tech, tools, and standards
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
			<div classes={commonCss.contentWrapper}>
				<section>
					<h2 classes={css.heading}>Services We Offer</h2>
					<Summary smaller>
						{{
							title: 'Modern Enterprise Web Development',
							blurb: (
								<div classes={css.listSummary}>
									<p>
										Build and evolve your application the right way. Whether we
										partner with your product team or take full ownership with
										our team, we’ll bring the experience and expertise to
										rapidly develop your application.
									</p>
									<p>Build the right application with:</p>
									<ul classes={css.iconList}>
										<li>
											<img src={agileIcon} /> Agile discover, analysis, and
											planning
										</li>
										<li>
											<img src={prototypeIcon} /> Rapid prototyping and design
											cycles
										</li>
										<li>
											<img src={enterpriseIcon} /> Enterprise UI and UX design
										</li>
										<li>
											<img src={fullstackIcon} /> Full-stack Enterprise
											JavaScript
										</li>
										<li>
											<img src={performanceIcon} /> Performance audits and
											improvements
										</li>
										<li>
											<img src={qualityIcon} /> Quality assurance testing
										</li>
										<li>
											<img src={devopsIcon} /> DevOps implementation
										</li>
									</ul>
								</div>
							),
							image: <img src={devImg} alt="Illustration for App Development" />
						}}
					</Summary>
					<Summary smaller reverse>
						{{
							title: 'Strategic & Technical Consulting',
							blurb: (
								<div classes={css.listSummary}>
									<p>
										Keep up with the evolving web engineering landscape and
										quickly adapt to shifting business priorities. We help you
										become strategically positioned by defining, structuring,
										and building the organizational and technical capabilities
										you need for lean, rapid web application deployment.
									</p>
									<p>Achieve your strategic goals with:</p>
									<ul classes={css.iconList}>
										<li>
											<img src={approachIcon} /> Development approach,
											planning, and implementation
										</li>
										<li>
											<img src={technologyIcon} /> Architecture, UX, open
											source software, and technology expertise
										</li>
										<li>
											<img src={legacyIcon} /> Legacy application
											maintainability and re-engineering
										</li>
										<li>
											<img src={deliveryIcon} /> Engineering culture, healthy
											teams, and continuous value delivery
										</li>
									</ul>
								</div>
							),
							image: <img src={consultingImg} alt="Illustration for Consulting" />
						}}
					</Summary>
				</section>
			</div>
			<ConnectStrip />
		</div>
	);
});

export default Services;
