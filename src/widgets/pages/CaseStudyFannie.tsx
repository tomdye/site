import { create, tsx } from '@dojo/framework/core/vdom';
import { Hero } from '../Hero';
import * as css from './CaseStudy.m.css';
import * as commonCss from '../../Common.m.css';
import { Summary } from '../Summary';
import { TechLinkList } from '../TechLinkList';
import ConnectButton from '../ConnectButton';
const completeImg = require('../../assets/images/services/complete.png');
const fannieImage = require('../../assets/images/ourwork/fannie.jpg');
const fannieBubbleImage = require('../../assets/images/ourwork/fannieBubble.png');

const factory = create();

export const CaseStudyFannie = factory(function CaseStudyFannie() {
	return (
		<div classes={css.root}>
			<head>
				<title>Modernizing &amp; Automating Technology for Fannie Mae | SitePen</title>
				<meta
					name="description"
					content="Learn more about our trusted partnership with Fannie Mae, and how we collaborated with them to modernize and automate their enterprise applications."
				/>
				<meta name="robots" content="index, follow" />
				<meta
					name="googlebot"
					content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
				/>
				<meta
					name="bingbot"
					content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
				/>
				<link rel="canonical" href="https://www.sitepen.com/case-study/fannie-mae/" />
				<meta property="og:locale" content="en_US" />
				<meta property="og:type" content="article" />
				<meta
					property="og:title"
					content="Modernizing &amp; Automating Technology for Fannie Mae | SitePen"
				/>
				<meta
					property="og:description"
					content="Learn more about our trusted partnership with Fannie Mae, and how we collaborated with them to modernize and automate their enterprise applications."
				/>
				<meta property="og:url" content="https://www.sitepen.com/case-study/fannie-mae/" />
				<meta property="og:site_name" content="SitePen" />
				<meta property="article:publisher" content="https://www.facebook.com/SitePen" />
				<meta
					property="og:image"
					content="https://wp.sitepen.com/wp-content/uploads/2020/01/favicon.png"
				/>
				<meta property="og:image:width" content="512" />
				<meta property="og:image:height" content="512" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:creator" content="@SitePen" />
				<meta name="twitter:site" content="@SitePen" />
			</head>
			<div classes={[css.heroWrapper, css.fannieHero]}>
				<div classes={commonCss.contentWrapper}>
					<Hero>
						{{
							title: 'case study',
							xlTitle: 'FANNIE MAE',
							blurb:
								'Today’s engineering teams are faced with the daunting challenge of translating the needs of intricate business processes into software solutions. SitePen’s leadership and expertise in UX design, application architecture and engineering allows Fannie Mae to deliver powerful solutions to support the needs of their demanding power users.'
						}}
					</Hero>
				</div>
			</div>
			<div classes={commonCss.contentWrapper}>
				<Summary smaller reverse collapse="stackReverse">
					{{
						title: 'The Situation',
						blurb:
							'Fannie Mae was looking to accelerate the design and development of its real time, data-heavy platform and receive leading industry expertise in the architecture, development and optimization of complex, business-critical web applications.',
						image: (
							<TechLinkList
								types={[
									'javascript',
									'typescript',
									'angular',
									'protractor',
									'ngrx',
									'jasmine',
									'spring'
								]}
							/>
						)
					}}
				</Summary>
				<Summary smaller>
					{{
						image: (
							<img
								classes={css.mainImage}
								src={fannieImage}
								alt="fannie mae application technology case study"
							/>
						),
						title: 'The Solution',
						blurb: (
							<virtual>
								<p>
									Fannie Mae has built a trusted partnership with the SitePen team
									as it continues to empower its users with the most resilient
									applications for their day-to-day success.
								</p>
								<p>
									For nearly a decade, SitePen has provided ongoing expertise
									around application architecture and design, and both client-side
									and server-side engineering. The SitePen team has substantial
									experience in building efficient, complex enterprise web
									applications and helped Fannie Mae:
								</p>
								<ul classes={css.bullets}>
									<li classes={css.bulletItem}>
										Solve challenges with critical applications including
										real-time scalability with very large data sets and complex
										business logic.
									</li>
									<li classes={css.bulletItem}>
										Modernize software architecture and DevOps to improve the
										reliability and efficiency of adding and releasing new
										features.
									</li>
									<li classes={css.bulletItem}>
										Bridge the gap that often exists between the business and
										engineering teams through the design of enterprise
										applications for advanced user scenarios.
									</li>
									<li classes={css.bulletItem}>
										Accelerate the migration of enterprise applications from
										legacy to modern software architecture based on Fannie Mae’s
										preferred architectural standards.
									</li>
								</ul>
							</virtual>
						)
					}}
				</Summary>
				<Summary smaller reverse>
					{{
						title: 'The Result',
						blurb:
							'SitePen collaborated with Fannie Mae teams with multiple applications and development groups for major functionality releases, application rearchitectures and redesigns, and major technology and architecture upgrades. With SitePen’s guidance and support, Fannie Mae has made significant strides in improving automated testing and other DevOps refinements. They also received coaching and mentoring to improve and sustain engineering best practices.',
						image: (
							<img
								classes={css.bubble}
								loading="lazy"
								src={fannieBubbleImage}
								alt="quote from fannie mae"
							/>
						)
					}}
				</Summary>
				<Summary smaller reverse>
					{{
						title: (
							<span classes={css.outroTitle}>
								Do you have expertise gaps on your team that prevent you from
								building and sustaining high quality modern web applications?
							</span>
						),
						blurb: (
							<virtual>
								<p>
									We are ready to help and humbly invite you to add the strength
									of our expertise and experience to your roadmap.
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

export default CaseStudyFannie;
