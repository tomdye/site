import { create, tsx } from '@dojo/framework/core/vdom';
import { Hero } from '../Hero';
import * as css from './OpenSource.m.css';
import * as commonCss from '../../Common.m.css';
import { ConnectStrip } from '../ConnectStrip';
import OSSLinks from '../OSSLinks';

const factory = create();

export const OpenSourceIntern = factory(function OpenSourceIntern() {
	return (
		<div classes={css.root}>
			<head>
				<title>Intern | SitePen</title>
				<meta
					name="description"
					content="An all-in-one solution for full-lifecycle testing of JavaScript and TypeScript applications, supporting Node and modern browsers."
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
				<link rel="canonical" href="https://www.sitepen.com/open-source/intern/" />
				<meta property="og:locale" content="en_US" />
				<meta property="og:type" content="article" />
				<meta property="og:title" content="Intern | SitePen" />
				<meta
					property="og:description"
					content="An all-in-one solution for full-lifecycle testing of JavaScript and TypeScript applications, supporting Node and modern browsers."
				/>
				<meta property="og:url" content="https://www.sitepen.com/open-source/intern/" />
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
			<div classes={[css.heroWrapper, css.internHeroWrapper]}>
				<div classes={commonCss.contentWrapper}>
					<Hero>
						{{
							title: 'open source',
							xlTitle: 'intern'
						}}
					</Hero>
				</div>
			</div>
			<div classes={commonCss.smallerContentWrapper}>
				<p>
					Comprehensive testing is a mainstay in effective development organizations. Ten
					years ago, fragmented testing processes were causing painful inefficiencies at
					SitePen and in the greater developer community. Recognizing the need for high
					quality testing in the enterprise prompted us to create and open-source Intern,
					a standards-based browser testing stack for JavaScript.
				</p>
				<p>
					We build tools like Intern because we know that when we can eliminate pain
					points and give developers better tools, they will use them. Creating tools like
					Intern allows us to improve the developer experience, making it easier for them
					to follow best practices and promoting engineer discipline across organization.
					Ultimately, it’s a win-win for the developer and their company. Useful tools
					lead to happier developers and happy developers build sustainable, high quality
					applications.
				</p>
			</div>
			<div classes={commonCss.contentWrapper}>
				<OSSLinks />
			</div>
			<ConnectStrip />
		</div>
	);
});

export default OpenSourceIntern;
