import { create, tsx } from '@dojo/framework/core/vdom';
import { Hero } from '../Hero';
import * as css from './CaseStudy.m.css';
import * as commonCss from '../../Common.m.css';
import { Summary } from '../Summary';
import { TechLinkList } from '../TechLinkList';
import ConnectButton from '../ConnectButton';
const completeImg = require('../../assets/images/services/complete.png');
const builtImage = require('../../assets/images/ourwork/built.jpg');
const builtBubbleImage = require('../../assets/images/ourwork/builtBubble.png');

const factory = create();

export const CaseStudyBuilt = factory(function CaseStudyBuilt() {
	return (
		<div classes={css.root}>
			<div classes={[css.heroWrapper, css.builtHero]}>
				<div classes={commonCss.contentWrapper}>
					<Hero>
						{{
							title: 'case study',
							xlTitle: 'BUILT TECHNOLOGIES',
							blurb:
								'It’s rare that a technology startup successfully creates a product that solves real-world problems and engages customers on their first try. So what happens when that very success creates growing pains for the company?'
						}}
					</Hero>
				</div>
			</div>
			<div classes={commonCss.contentWrapper}>
				<Summary smaller reverse collapse="stackReverse">
					{{
						title: 'The Situation',
						blurb: (
							<virtual>
								<p>
									Built Technologies offers the leading software for construction
									lenders. Built creates a safe, secure digital tool to help
									customers reduce risk when funding complex development projects
									and gives builders better cash flow management oversight.
								</p>
								<p>
									Because demand for its unique application features was
									increasing quickly, Built needed to rapidly scale its existing
									platform while reengineering their next generation solution.
								</p>
							</virtual>
						),
						image: (
							<TechLinkList
								types={['react', 'typescript', 'intern', 'canjs', 'php']}
							/>
						)
					}}
				</Summary>
				<Summary smaller>
					{{
						image: (
							<img
								classes={[css.mainImage, css.paddedImage]}
								src={builtImage}
								alt="built application technology case study"
							/>
						),
						title: 'The Solution',
						blurb: (
							<virtual>
								<p>
									SitePen worked with Built Technologies to meet competing
									priorities which included legacy application maintenance and
									next gen build out to proactively meet the demands of continued
									business growth. In addition to conducting a full TypeScript
									modernization and conversion to improve developer ergonomics and
									ensure best practices, we also established a proactive,
									integrated testing solution and put the right tools in place to
									identify problematic patterns to prevent the accumulation of
									technical debt going forward. These were significant DevOps
									refinements that would drive efficiency and long-term
									sustainability across platforms, laying the foundation for its
									maturing development team.
								</p>
								<p>
									SitePen’s development approach prioritized architecture,
									reusable components and engrained best practices to help speed
									future development efforts within Built Technologies’
									development discipline and design system guidelines.
								</p>
							</virtual>
						)
					}}
				</Summary>
				<Summary smaller reverse>
					{{
						title: 'The Result',
						blurb:
							'Built Technologies could more quickly add critical features to meet customer needs while maintaining a stable code base. Built now has a clear path to transition from aging technologies to a more modern, nimble architecture.',
						image: (
							<img
								classes={css.bubble}
								loading="lazy"
								src={builtBubbleImage}
								alt="quote from built"
							/>
						)
					}}
				</Summary>
				<Summary smaller reverse>
					{{
						title: (
							<span classes={css.outroTitle}>
								Are you struggling to modernize existing solutions while striving to
								meet the feature demands of your growing customer base?
							</span>
						),
						blurb: (
							<virtual>
								<p>
									Contact us to gain the experience of our complete,
									cross-functional team to address your competing priorities.
								</p>
								<ConnectButton cta />
							</virtual>
						),
						image: (
							<img
								classes={commonCss.sizedSummaryImage}
								loading="lazy"
								src={completeImg}
								alt="Illustration for Complete Team"
							/>
						)
					}}
				</Summary>
			</div>
		</div>
	);
});

export default CaseStudyBuilt;
