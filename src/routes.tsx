import { RouteConfig } from '@dojo/framework/routing/interfaces';

const routes: RouteConfig[] = [
	{
		id: 'home',
		path: '/',
		outlet: 'main',
		defaultRoute: true
	},
	{
		id: 'contact',
		path: 'contact',
		outlet: 'main'
	},
	{
		id: 'strategySession',
		path: 'strategy-session',
		outlet: 'main'
	},
	{
		id: 'contactThankyou',
		path: 'contact-thank-you',
		outlet: 'main'
	},
	{
		id: 'expertise',
		path: 'expertise',
		outlet: 'main'
	},
	{
		id: 'work',
		path: 'our-work',
		outlet: 'main'
	},
	{
		id: 'services',
		path: 'services',
		outlet: 'main'
	},
	{
		id: 'privacy',
		path: 'privacy-policy',
		outlet: 'main'
	},
	{
		id: 'opensource',
		path: 'open-source',
		outlet: 'main'
	},
	{
		id: 'opensourceDojo',
		path: 'open-source/dojo-framework',
		outlet: 'main'
	},
	{
		id: 'opensourceDgrid',
		path: 'open-source/dgrid',
		outlet: 'main'
	},
	{
		id: 'opensourceIntern',
		path: 'open-source/intern',
		outlet: 'main'
	},
	{
		id: 'opensourceTypescript',
		path: 'open-source/typescript',
		outlet: 'main'
	},
	{
		id: 'opensourceDojoToolkit',
		path: 'open-source/dojo-toolkit',
		outlet: 'main'
	},
	{
		id: 'about',
		path: 'about-us',
		outlet: 'main'
	},
	{
		id: 'careers',
		path: 'careers',
		outlet: 'main'
	},
	{
		id: 'casestudyFannie',
		path: 'case-study/fannie-mae',
		outlet: 'main'
	},
	{
		id: 'casestudyMarriott',
		path: 'case-study/marriott',
		outlet: 'main'
	},
	{
		id: 'casestudyBuilt',
		path: 'case-study/built-technologies',
		outlet: 'main'
	},
	{
		id: 'casestudySocial',
		path: 'case-study/social-knowledge',
		outlet: 'main'
	},
	{
		id: 'blog',
		outlet: 'main',
		path: 'blog',
		children: [
			{
				id: 'category',
				outlet: 'main',
				path: 'category/{slug}'
			},
			{
				id: 'series',
				outlet: 'main',
				path: 'series/{slug}'
			},
			{
				id: 'search',
				outlet: 'main',
				path: 'search?{term}'
			},
			{
				id: 'blogPage',
				outlet: 'main',
				path: '{slugOrPage}'
			}
		]
	},
	{
		id: 'error404',
		path: 'error-404',
		outlet: 'main'
	}
];

export default routes;
