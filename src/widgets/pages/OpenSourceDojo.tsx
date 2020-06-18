import { create, tsx } from '@dojo/framework/core/vdom';
import { Hero } from '../Hero';
import * as css from './OpenSource.m.css';
import * as commonCss from '../../Common.m.css';
import { ConnectStrip } from '../ConnectStrip';
import OSSLinks from '../OSSLinks';

const factory = create();

export const OpenSourceDojo = factory(function OpenSourceDojo() {
	return (
		<div classes={css.root}>
			<head>
				<title>Dojo Framework | SitePen</title>
				<meta
					name="description"
					content="A modern, reactive TypeScript framework for building robust, enterprise-grade web applications."
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
				<link rel="canonical" href="https://www.sitepen.com/open-source/dojo-framework/" />
				<meta property="og:locale" content="en_US" />
				<meta property="og:type" content="article" />
				<meta property="og:title" content="Dojo Framework | SitePen" />
				<meta
					property="og:description"
					content="A modern, reactive TypeScript framework for building robust, enterprise-grade web applications."
				/>
				<meta
					property="og:url"
					content="https://www.sitepen.com/open-source/dojo-framework/"
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
			<div classes={css.dojoHeroWrapper}>
				<div classes={css.dojoHeroOverlay} />
				<div classes={[commonCss.contentWrapper, css.dojoHeroContentWrapper]}>
					<Hero>
						{{
							title: 'open source',
							xlTitle: 'dojo framework'
						}}
					</Hero>
				</div>
			</div>
			<div classes={commonCss.smallerContentWrapper}>
				<p>
					SitePen’s answer to modern web engineering is Dojo Framework, a reactive
					TypeScript first framework that approaches application development with a
					continuing focus on the requirements of the Enterprise and the engineers who
					support it.
				</p>
				<p>
					Modern Dojo builds on many of the lessons learned from our experience building
					and maintaining the Dojo Toolkit. Progress on Dojo Toolkit started to slow due
					to the time in which it was built. It needed to define many features years
					before they were standardized, but today it’s possible to leverage modern APIs
					and standards. Today’s JavaScript ecosystem is far more powerful and flexible,
					making it much easier to create something powerful that co-exists with the
					ecosystem rather than needing to create its own solution for every engineering
					challenge. But to be successful in creating JavaScript apps today, it often
					requires a wealth of knowledge and a substantial collection of decisions to make
					before productivity can be achieved. Modern Dojo also makes it super easy to
					update to newer versions of the framework through powerful CLI tools.
				</p>
				<p>Dojo Framework aims to:</p>
				<ul classes={css.list}>
					<li classes={css.item}>
						<b>Remove Decision Paralysis</b> – Dojo provides excellent out-of-the-box
						default decisions, while making it possible to change or override those
						defaults. This allows teams to be productive quickly while creating high
						performance applications by default.
					</li>
					<li classes={css.item}>
						<b>Guide Engineers</b> – Dojo provides an approach that helps engineers
						build applications with good architecture and performance best practices by
						default. For example, Dojo applications are PWAs by default, and provide
						incredibly simple approaches for rendering optimizations, code-splitting,
						and other performance without needing to rewrite application logic.
					</li>
					<li classes={css.item}>
						<b>Provide Developer Ergonomics</b> – Dojo aligns with modern standards and
						patterns without the cognitive overload of every design decision. For
						example, Dojo currently leverages webpack for various build optimizations,
						but most applications built with Dojo will never need to think about webpack
						configuration as Dojo does the right thing based on the application
						architecture. Dojo provides efficient tooling for creating and testing
						applications and UI widgets, type safety and accuracy via efficient
						TypeScript ergonomics, and much more.
					</li>
					<li classes={css.item}>
						<b>Results</b> – Dojo provides a modern Reactive framework leveraging
						TypeScript and by default creates applications with high performance,
						excellent architecture, efficient ergonomics, and alignment with modern
						standards. The result is applications that get engineered more efficiently,
						have incredible performance, and lower total cost of ownership due to ease
						of testing and maintenance.
					</li>
				</ul>
				<p>
					Dojo provides a stable foundation for users to build performant, extensible, and
					sustainable applications for the future.
				</p>
			</div>
			<div classes={commonCss.contentWrapper}>
				<OSSLinks />
			</div>
			<ConnectStrip />
		</div>
	);
});

export default OpenSourceDojo;
