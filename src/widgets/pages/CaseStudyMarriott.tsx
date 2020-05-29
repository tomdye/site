import { create, tsx } from '@dojo/framework/core/vdom';
import { Hero } from '../Hero';
import * as css from './CaseStudy.m.css';
import * as commonCss from '../../Common.m.css';
import { Summary } from '../Summary';
import { TechLinkList } from '../TechLinkList';
import ConnectButton from '../ConnectButton';
import { Link } from '@dojo/framework/routing/Link';
const holisticImg = require('../../assets/images/services/holistic.svg');
const marriottImage = require('../../assets/images/ourwork/marriott.jpg');
const marriottBubbleImage = require('../../assets/images/ourwork/marriottBubble.png');

const factory = create();

export const CaseStudyMarriott = factory(function CaseStudyMarriott() {
	return (
		<div classes={css.root}>
			<div classes={[css.heroWrapper, css.marriottHero]}>
				<div classes={commonCss.contentWrapper}>
					<Hero>
						{{
							title: 'case study',
							xlTitle: 'MARRIOTT',
							blurb:
								'Growth for a company often comes with change, which can provide its own set of challenges. Providing a stable enterprise application, aligning with new technologies, rolling out new features to meet the needs of the business, and giving users a consistent experience are often competing priorities for the enterprise. What’s the best way to maintain productivity and usability as an application grows well beyond its original mission?'
						}}
					</Hero>
				</div>
			</div>
			<div classes={commonCss.contentWrapper}>
				<Summary smaller reverse>
					{{
						title: 'The Situation',
						blurb:
							'Marriott was an early adopter of web-based technologies, having built many critical business applications that leveraged early technologies such as Java applets and Java Server Pages (JSPs). These technologies, however, eventually impeded its ability to iterate and provide a modern user experience. As more users came to rely on these systems, the effort required to maintain and grow the applications became increasingly difficult to manage, blocking high priority business objectives.',
						image: (
							<TechLinkList
								types={['dojoToolkit', 'dgrid', 'dstore', 'intern', 'javascript']}
							/>
						)
					}}
				</Summary>
				<Summary smaller>
					{{
						image: (
							<img
								src={marriottImage}
								alt="marriott application technology case study"
							/>
						),
						title: 'The Solution',
						blurb: (
							<p>
								SitePen provided senior technical{' '}
								<Link to="expertise">expertise</Link> and leadership to help
								Marriott forge a new path in developing its mission-critical
								applications. SitePen migrated several applications to new
								interfaces and technologies, which maximized both developer and user
								productivity and usability. These new application interfaces were
								designed to integrate with the existing infrastructure to ensure
								that critical business logic was retained throughout.
							</p>
						)
					}}
				</Summary>
				<Summary smaller reverse>
					{{
						title: 'The Result',
						blurb: (
							<virtual>
								<p>
									With SitePen’s <Link to="about">leadership</Link>, knowledge,
									and ability to meet complex requirements within estimates,
									Marriott created maintainable and extensible business
									applications that satisfy all stakeholder needs. The platform is
									much easier to use and removes silos between business processes,
									leading to more actionable insights and increased team
									productivity.
								</p>
								<p>
									With an updated front-end platform, Marriott is able to
									continuously modernize their data-heavy applications to improve
									usability and sustainability over time. Due to the streamlined
									workflows resulting from the new system, Marriott can increase
									focus on maximizing revenue and achieving business objectives.
								</p>
							</virtual>
						),
						image: <img src={marriottBubbleImage} alt="quote from marriott" />
					}}
				</Summary>
				<Summary smaller reverse>
					{{
						title: (
							<span classes={css.outroTitle}>
								Is your organization bogged down with inefficient or legacy systems
								that need an overhaul?
							</span>
						),
						blurb: (
							<virtual>
								<p>
									Contact SitePen to learn how the leadership and expersite of our
									complete, cross-functional team can help you overcome your
									biggest challenges.
								</p>
								<ConnectButton cta />
							</virtual>
						),
						image: <img src={holisticImg} alt="Illustration for Holistic Approach" />
					}}
				</Summary>
			</div>
		</div>
	);
});

export default CaseStudyMarriott;
