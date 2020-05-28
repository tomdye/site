import { create, tsx } from '@dojo/framework/core/vdom';
import { Hero } from '../Hero';
import * as css from './Work.m.css';
import * as commonCss from '../../Common.m.css';
import { ConnectStrip } from '../ConnectStrip';
import { Summary } from '../Summary';
import { Link } from '@dojo/framework/routing/Link';
import { OSSLinks } from '../OSSLinks';

const fannieImage = require('../../assets/images/ourwork/fannie.jpg');
const marriottImage = require('../../assets/images/ourwork/marriott.jpg');
const builtImage = require('../../assets/images/ourwork/built.jpg');
const socialKnowledgeImage = require('../../assets/images/ourwork/socialKnowledge.jpg');

export interface WorkProperties {}

const factory = create().properties<WorkProperties>();

export const Work = factory(function Work() {
	return (
		<div classes={css.root}>
			<div classes={css.heroWrapper}>
				<div classes={commonCss.contentWrapper}>
					<Hero>
						{{
							title: 'CONTINUOUS DELIVERY OF',
							xlTitle: 'POSITIVE RESULTS',
							blurb: 'For Our Customers and the Open Source Community'
						}}
					</Hero>
				</div>
			</div>
			<div classes={commonCss.contentWrapper}>
				<h2 classes={css.heading}>Recent Enterprise-Grade Software Solutions</h2>
				<p classes={css.intro}>
					From proofs-of-concept to fullstack feature development to legacy
					re-engineering, companies rely on our agility and expertise in all areas of the
					software development lifecycle. Learn how we help our customers meet their
					development objectives successfully and with confidence.
				</p>
				<Summary smaller reverse>
					{{
						title: 'Fannie Mae',
						blurb: (
							<virtual>
								<p>
									Today’s engineering teams are faced with the daunting challenge
									of translating the needs of intricate business processes into
									software solutions that last. Learn more about how our
									leadership and expertise in{' '}
									<Link to="services">
										user-experience design and front-end application development
									</Link>{' '}
									allows Fannie Mae to deliver powerful, integrated tools that
									will support the needs of their Fintech operations for years to
									come.
								</p>
								<Link to="casestudy/fannie" classes={css.linkButton}>
									view case study
								</Link>
							</virtual>
						),
						image: (
							<img
								src={fannieImage}
								alt="fannie mae application technology case study"
							/>
						)
					}}
				</Summary>
				<Summary smaller>
					{{
						title: 'Marriott International',
						blurb: (
							<virtual>
								<p>
									Providing a stable enterprise application, aligning with new
									technologies, rolling out new features to meet the needs of the
									business, and giving users a consistent user experience are
									competing priorities in most companies. Learn more about how we
									help keep apps modern and useful for companies whose bottomline
									depends on the optimal performance of its applications.
								</p>
								<Link to="casestudy/marriot" classes={css.linkButton}>
									view case study
								</Link>
							</virtual>
						),
						image: (
							<img
								styles={{ marginLeft: '-80px' }}
								src={marriottImage}
								alt="marriott application technology case study"
							/>
						)
					}}
				</Summary>
				<Summary smaller reverse>
					{{
						title: 'Built Technologies',
						blurb: (
							<virtual>
								<p>
									It’s rare that a technology startup successfully creates a
									product that solves real-world problems and engages customers on
									their first try. Read on to find out how Built Technologies used
									SitePen to increase its skill and team size to overcome the
									welcome challenges of success and rapid growth.
								</p>
								<Link to="casestudy/built" classes={css.linkButton}>
									view case study
								</Link>
							</virtual>
						),
						image: (
							<img
								src={builtImage}
								alt="Built Technologies application technology case study"
							/>
						)
					}}
				</Summary>
				<Summary smaller>
					{{
						title: 'Social Knowledge',
						blurb: (
							<virtual>
								<p>
									Organizational leadership that recognizes the importance of
									architecture, scalability and sustainability at the outset of a
									software development project is key to ensuring the longevity of
									an application. Read about how SitePen provided objective,
									external insights in vetting our Customer’s approach,
									architecture, tools and technologies for the future of its
									product.
								</p>
								<Link to="casestudy/socialKnowledge" classes={css.linkButton}>
									view case study
								</Link>
							</virtual>
						),
						image: (
							<img
								styles={{ marginLeft: '-160px' }}
								src={socialKnowledgeImage}
								alt="Social Knowledge application technology case study"
							/>
						)
					}}
				</Summary>
				<OSSLinks />
			</div>
			<ConnectStrip />
		</div>
	);
});

export default Work;
