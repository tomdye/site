import { create, tsx } from '@dojo/framework/core/vdom';
import * as css from './Home.m.css';
import * as commonCss from '../../Common.m.css';
import { Hero } from '../Hero';
import { Summary } from '../Summary';
import { ConnectStrip } from '../ConnectStrip';
import { Link } from '@dojo/framework/routing/Link';
import { Carousel } from '../Carousel';
const advisementImg = require('../../assets/images/home/advisement.svg');
const challengingImg = require('../../assets/images/home/challenging.svg');
const confidenceImg = require('../../assets/images/home/confidence.svg');
const dependImg = require('../../assets/images/home/depend.svg');
const targetIcon = require('../../assets/images/icons/target.svg');
const flagIcon = require('../../assets/images/icons/flag.svg');
const rosetteIcon = require('../../assets/images/icons/rosette.svg');
const partnershipIcon = require('../../assets/images/icons/partnership.svg');
const fannieLogo = require('../../assets/images/logos/fannie.svg');
const intuitLogo = require('../../assets/images/logos/intuit.svg');
const marriottLogo = require('../../assets/images/logos/marriott.svg');
const pershingLogo = require('../../assets/images/logos/pershing.svg');
const clientsSlide1 = require('../../assets/images/logos/clients-slide1.svg');
const clientsSlide2 = require('../../assets/images/logos/clients-slide2.svg');
const clientsSlide3 = require('../../assets/images/logos/clients-slide3.svg');

const factory = create();

export const Home = factory(function Home() {
	return (
		<div classes={css.root}>
			<div classes={css.heroWrapper}>
				<div classes={commonCss.contentWrapper}>
					<Hero connect>
						{{
							title: 'ENTERPRISE WEB APPS',
							xlTitle: 'done right',
							blurb: `You have complex problems that need to be solved the right way the first time. You need the expertise, leadership and guidance on your team to connect your software strategy to execution. Partnering with us will ensure your solution is built with intelligent technology choices that allow you to scale for future flexibility and develop experiences that satisfy your users.`
						}}
					</Hero>
					<Carousel>
						<img
							classes={css.clientSlide}
							src={clientsSlide1}
							alt="Logos for TD Ameritrade, Ellie Mae, Fannie Mae, and HSBC"
						/>
						<img
							classes={css.clientSlide}
							src={clientsSlide2}
							alt="Logos for Intuit, JP Morgan Chase, Liberty Mutual, and Marriott"
						/>
						<img
							classes={css.clientSlide}
							src={clientsSlide3}
							alt="Logos for BMO, Pearson, Bristol-Myers Squibb and Pershing"
						/>
					</Carousel>
				</div>
			</div>
			<div classes={commonCss.contentWrapper}>
				<Summary>
					{{
						title: 'Solve your most challenging problems',
						blurb: `High engineering costs and stalled projects are common complaints for many companies. Our approach to creating healthy development organizations will quickly help you identify the “why” of these problems and our team will work to get you back to the business of moving efficiently toward your goals.`,
						image: (
							<img
								src={challengingImg}
								classes={css.summaryImage}
								alt="illustration of challenging"
							/>
						)
					}}
				</Summary>
				<Summary reverse>
					{{
						title: 'Get continuous advisement throughout the SDLC',
						blurb: `You need a cross-functional team to understand your business and partner with you to define and incorporate strategy, design, and technology into all aspects of your product. Allowing for big-picture thinking to inform decisions in even the smallest details of a project creates and nurtures smart, engaged teams who care about delivering high-quality user experiences, as your web app continues to grow and evolve.`,
						image: (
							<img
								src={advisementImg}
								classes={css.summaryImage}
								alt="illustration of advisement"
							/>
						)
					}}
				</Summary>
				<Summary>
					{{
						title: 'Envision the future with confidence',
						blurb: `Imagine leading a dedicated development team with unwavering confidence in its ability to tackle challenging problems, meet business objectives and deliver on a shared vision. With us as your partner, you’ll always have a technically validated project plan with an expert, cross-functional team producing high-quality results with care and predictability.`,
						image: (
							<img
								src={confidenceImg}
								classes={css.summaryImage}
								alt="illustration of confidence"
							/>
						)
					}}
				</Summary>
				<div classes={css.dependSummary}>
					<Summary reverse collapse="hide">
						{{
							title: <span id="dependable">You can depend on us</span>,
							blurb: (
								<dl classes={css.dependList}>
									<dt classes={css.title}>
										<img
											classes={css.dependIcon}
											src={targetIcon}
											alt="target icon"
										/>
										<h3 classes={css.iconheading}>ENTERPRISE EXPERTISE</h3>
									</dt>
									<dd classes={css.definition}>
										Align with people who provide a rare combination of
										enterprise experience,{' '}
										<Link to="expertise">software development expertise</Link>,
										and the skills to get it done.
									</dd>
									<dt classes={css.title}>
										<img
											classes={css.dependIcon}
											src={flagIcon}
											alt="flag icon"
										/>
										<h3 classes={css.iconheading}>INDUSTRY LEADERSHIP</h3>
									</dt>
									<dd classes={css.definition}>
										Be in sync with leaders in Enterprise JavaScript and{' '}
										<Link to="about">work with a team</Link> that actively
										shapes the open web.
									</dd>
									<dt classes={css.title}>
										<i classes={[css.dependIcon, 'icon-route']} />
										<h3 classes={css.iconheading}>PREDICTABILITY</h3>
									</dt>
									<dd classes={css.definition}>
										Rely on timely delivery with predictably dependable results
										from a complete team that can do it all, end-to-end.
									</dd>
									<dt classes={css.title}>
										<img
											classes={css.dependIcon}
											src={rosetteIcon}
											alt="rosette icon"
										/>
										<h3 classes={css.iconheading}>GREAT CUSTOMER EXPERIENCE</h3>
									</dt>
									<dd classes={css.definition}>
										Reach your goals with a company that develops applications
										and partner relationships with user experience in mind.
									</dd>
									<dt classes={css.title}>
										<img
											classes={css.dependIcon}
											src={partnershipIcon}
											alt="partnership icon"
										/>
										<h3 classes={css.iconheading}>DEDICATED PARTNERSHIP</h3>
									</dt>
									<dd classes={css.definition}>
										Benefit from ongoing communication and a partnership based
										on shared goals, knowledge transfer, and trust.
									</dd>
								</dl>
							),
							image: (
								<img
									loading="lazy"
									src={dependImg}
									alt="illustration of dependability"
								/>
							)
						}}
					</Summary>
				</div>
				<div classes={css.carouselWrapper}>
					<Carousel navigation>
						<div classes={css.reference}>
							<div classes={css.referenceBlurb}>
								“SitePen’s expertise and quality of work is far greater than other
								vendors we’ve used.”
							</div>
							<div classes={css.referenceTitle}>- Sr. Software Engineer</div>
							<img loading="lazy" src={marriottLogo} alt="Marriott" />
						</div>
						<div classes={css.reference}>
							<div classes={css.referenceBlurb}>
								“We originally used SitePen to help develop functionality in areas
								where we either had no expertise or little time. Now they’re our
								go-to for full products.”
							</div>
							<div classes={css.referenceTitle}>- Head of Digital Products</div>
							<img loading="lazy" src={fannieLogo} alt="Fannie Mae" />
						</div>
						<div classes={css.reference}>
							<div classes={css.referenceBlurb}>
								“SitePen is an extremely valuable, proactive and customer-centric
								partner. Their skill and knowledge is vast and the benefit of their
								transfer of knowledge to our teams for scalability is huge.”
							</div>
							<div classes={css.referenceTitle}>- Director</div>
							<img loading="lazy" src={pershingLogo} alt="Pershing" />
						</div>
						<div classes={css.reference}>
							<div classes={css.referenceBlurb}>
								“We’ve worked with other consultants and the quality of SitePen’s
								engineers and UI expertise is superior. They don’t just code; they
								consider, consult, and create. They take pride in workmanship and I
								can’t say enough about the quality of their work.”
							</div>
							<div classes={css.referenceTitle}>- Engineering Manager</div>
							<img loading="lazy" src={intuitLogo} alt="Intuit" />
						</div>
					</Carousel>
				</div>
			</div>
			<ConnectStrip />
		</div>
	);
});

export default Home;
