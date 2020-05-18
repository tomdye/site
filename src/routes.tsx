import { RouteConfig } from '@dojo/framework/routing/interfaces';

const routes: RouteConfig[] = [
	{
		id: 'home',
		path: 'home',
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
	}
];

export default routes;
