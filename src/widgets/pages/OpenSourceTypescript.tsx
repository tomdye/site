import { create, tsx } from '@dojo/framework/core/vdom';
import { Hero } from '../Hero';
import * as css from './OpenSource.m.css';
import * as commonCss from '../../Common.m.css';
import { ConnectStrip } from '../ConnectStrip';
import OSSLinks from '../OSSLinks';

const factory = create();

export const OpenSourceTypescript = factory(function OpenSourceTypescript() {
	return (
		<div classes={css.root}>
			<head>
				<title>TypeScript | SitePen</title>
				<meta
					name="description"
					content="SitePen is a strong advocate and supporter of TypeScript, which provides optional typing with intelligent type inference to help enterprise teams build and maintain high-quality applications."
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
				<link rel="canonical" href="https://www.sitepen.com/open-source/typescript/" />
				<meta property="og:locale" content="en_US" />
				<meta property="og:type" content="article" />
				<meta property="og:title" content="TypeScript | SitePen" />
				<meta
					property="og:description"
					content="SitePen is a strong advocate and supporter of TypeScript, which provides optional typing with intelligent type inference to help enterprise teams build and maintain high-quality applications."
				/>
				<meta property="og:url" content="https://www.sitepen.com/open-source/typescript/" />
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
			<div classes={[css.heroWrapper, css.typescriptHeroWrapper]}>
				<div classes={commonCss.contentWrapper}>
					<Hero>
						{{
							title: 'open source',
							xlTitle: 'typescript'
						}}
					</Hero>
				</div>
			</div>
			<div classes={commonCss.smallerContentWrapper}>
				<p>
					We recognized the potential{' '}
					<a href="https://www.typescriptlang.org/" target="_blank" rel="noopener">
						TypeScript
					</a>{' '}
					had all the way back in 2013. By embracing rather than trying to replace
					JavaScript, we knew that TypeScript could bring significant tooling improvements
					to the language we already loved through its addition of optional typing,
					interfaces, and static analysis tooling. By 2014, we were already experimenting
					with how to utilize TypeScript to bring order to the mayhem of large-scale web
					application development.
				</p>
				<p>
					To us, TypeScript is not a language. It’s a tool used to better write JavaScript
					by providing intelligent code completion, refactoring, and validation to
					applications. TypeScript can (and is!) changing the face of web application
					development as we know it.
				</p>
				<p>
					We continue to be avid proponents of TypeScript, partnering with Microsoft to
					present the first-ever TypeScript conference starting in 2018, building the
					modern Dojo Framework, a TypeScript-first framework for building
					enterprise-scale web applications and advocating for its use to improve our
					customers’ development organizations. Because of these things, we fancy
					ourselves contributors to its fast growing community!
				</p>
			</div>
			<div classes={commonCss.contentWrapper}>
				<OSSLinks />
			</div>
			<ConnectStrip />
		</div>
	);
});

export default OpenSourceTypescript;
