import { create, tsx } from '@dojo/framework/core/vdom';
import { Hero } from '../Hero';
import * as css from './CaseStudy.m.css';
import * as summaryCss from '../Summary.m.css';
import * as commonCss from '../../Common.m.css';
import { Summary } from '../Summary';
import { TechLinkList } from '../TechLinkList';
import ConnectButton from '../ConnectButton';
const engineeringImg = require('../../assets/images/services/engineering.jpg');
const socialKnowledgeImage = require('../../assets/images/ourwork/socialKnowledge.jpg');

const factory = create();

export const CaseStudySocial = factory(function CaseStudySocial() {
	return (
		<div classes={css.root}>
			<head>
				<title>Using React to Update Social Knowledge&#039;s Platforms | SitePen</title>
				<meta
					name="description"
					content="See how our team at SitePen helped Social Knowledge streamline and accelerate their modernization efforts to quickly reduce maintenance costs."
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
				<link rel="canonical" href="https://www.sitepen.com/case-study/social-knowledge/" />
				<meta property="og:locale" content="en_US" />
				<meta property="og:type" content="article" />
				<meta
					property="og:title"
					content="Using React to Update Social Knowledge&#039;s Platforms | SitePen"
				/>
				<meta
					property="og:description"
					content="See how our team at SitePen helped Social Knowledge streamline and accelerate their modernization efforts to quickly reduce maintenance costs."
				/>
				<meta
					property="og:url"
					content="https://www.sitepen.com/case-study/social-knowledge/"
				/>
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
			<div classes={[css.heroWrapper, css.socialHero]}>
				<div classes={commonCss.contentWrapper}>
					<Hero>
						{{
							title: 'case study',
							xlTitle: 'SOCIAL KNOWLEDGE',
							blurb:
								'Social Knowledge had a powerful application that was created in a pre-ES2015 world and it was becoming increasingly difficult to make updates and improvements to its platform. Social Knowledge needed to streamline and accelerate their modernization efforts to reduce maintenance costs as quickly as possible.'
						}}
					</Hero>
				</div>
			</div>
			<div classes={commonCss.contentWrapper}>
				<Summary smaller reverse collapse="stackReverse">
					{{
						title: 'The Situation',
						blurb:
							'As the state of web application development changes and matures, products built on previous-generation technologies reach their end of life and need to get rebuilt to gain significant advantages of the web platform. Social Knowledge was faced with that and wanted to make sure its improvements were the right ones that would position the app for continuous modernization into the future.',
						image: (
							<TechLinkList
								types={[
									'react',
									'reactNative',
									'redux',
									'mobx',
									'typescript',
									'jest'
								]}
							/>
						)
					}}
				</Summary>
				<Summary smaller>
					{{
						image: (
							<img
								classes={[css.mainImage, css.paddedImage]}
								src={socialKnowledgeImage}
								alt="social knowledge application technology case study"
							/>
						),
						title: 'The Solution',
						blurb: (
							<virtual>
								<p>
									SitePen provided the leadership and cross-functional expertise
									needed to execute on a complete rewrite of the architecture that
									improved performance, maintainability, and modernity of the
									application.
								</p>
								<ul classes={css.bullets}>
									<li classes={css.bulletItem}>
										Considering Social Knowledge’s long-term goal of having both
										a responsive website and moving into native apps in the
										future, SitePen leveraged the React Native Web library. This
										library makes native component syntax available for both
										web-based apps and isolated business logic, helping Social
										Knowledge increase future efficiency by re-using this
										architecture for future native application development.
									</li>
									<li classes={css.bulletItem}>
										Leveraging the Jest JavaScript testing framework, SitePen
										authored unit tests for state logic and snapshot tests for
										widgets, providing solid test coverage for prop-driven
										components. The snapshot results automatically get saved,
										allowing for comparison when re-running tests after each new
										feature gets implemented, giving Social Knowledge’s
										developers confidence that changes would not introduce
										regressions.
									</li>
								</ul>
							</virtual>
						)
					}}
				</Summary>
				<div classes={css.result}>
					<h3 classes={summaryCss.title3}>The Result</h3>
					<p classes={summaryCss.blurb}>
						In one big step, SitePen eliminated the weighty technical debt of an
						outdated front-end technology stack and helped put Social Knowledge on a
						sustainable path with better development possibilities in their new React
						environment.
					</p>
				</div>
				<Summary smaller reverse>
					{{
						title: (
							<span classes={css.outroTitle}>
								Are you stuck with technical problems in your enterprise web
								applications that you could use some extra expertise and support
								with?
							</span>
						),
						blurb: (
							<virtual>
								<p>
									Contact SitePen to learn how we can help you get back on track.
								</p>
								<ConnectButton cta />
							</virtual>
						),
						image: (
							<img
								classes={commonCss.sizedSummaryImage}
								loading="lazy"
								src={engineeringImg}
								alt="Illustration for Holistic Approach"
							/>
						)
					}}
				</Summary>
			</div>
		</div>
	);
});

export default CaseStudySocial;
