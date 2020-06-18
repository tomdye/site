import { create, tsx } from '@dojo/framework/core/vdom';
import { Hero } from '../Hero';
import * as css from './OpenSource.m.css';
import * as commonCss from '../../Common.m.css';
import { ConnectStrip } from '../ConnectStrip';
import OSSLinks from '../OSSLinks';

const factory = create();

export const OpenSourceDgrid = factory(function OpenSourceDgrid() {
	return (
		<div classes={css.root}>
			<head>
				<title>dgrid | SitePen</title>
				<meta
					name="description"
					content="A comprehensive, responsive, and modular data grid. Performant, scalable and embeddable within any application or framework including React and Angular."
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
				<link rel="canonical" href="https://www.sitepen.com/open-source/dgrid/" />
				<meta property="og:locale" content="en_US" />
				<meta property="og:type" content="article" />
				<meta property="og:title" content="dgrid | SitePen" />
				<meta
					property="og:description"
					content="A comprehensive, responsive, and modular data grid. Performant, scalable and embeddable within any application or framework including React and Angular."
				/>
				<meta property="og:url" content="https://www.sitepen.com/open-source/dgrid/" />
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
			<div classes={[css.heroWrapper, css.dgridHeroWrapper]}>
				<div classes={commonCss.contentWrapper}>
					<Hero>
						{{
							title: 'open source',
							xlTitle: 'dgrid'
						}}
					</Hero>
				</div>
			</div>
			<div classes={commonCss.smallerContentWrapper}>
				<p>
					Data grids are a common need for representing data in enterprise applications.
					Grids are challenging as browsers do not provide sufficient built-in APIs to
					reflect the wide variety of features needed by enterprises.
				</p>
				<p>
					Prior to{' '}
					<a href="https://dgrid.io/" target="_blank" rel="noopener">
						dgrid
					</a>
					, most data grid solutions either struggled immensely with performance issues
					due to a kitchen sink approach, or were incredibly limited in their
					capabilities. dgrid was the first grid component to provide both flexibility and
					efficient performance.
				</p>
				<p>
					dgrid provides a flexible architecture for including data grid features
					incrementally, optimizing performance for only the features needed. From
					lazy-loading very large data sets to powerful features for configuring and
					controlling grid behavior, dgrid offers a powerful data grid component and
					though built over 10 years ago, is still maintained and in heavy use today.
				</p>
			</div>
			<div classes={commonCss.contentWrapper}>
				<OSSLinks />
			</div>
			<ConnectStrip />
		</div>
	);
});

export default OpenSourceDgrid;
