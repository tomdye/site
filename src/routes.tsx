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
		id: 'about',
		path: 'about-us',
		outlet: 'main'
	},
	{
		id: 'careers',
		path: 'careers',
		outlet: 'main'
	}
];

export default routes;
