import { RouteConfig } from '@dojo/framework/routing/interfaces';

const routes: RouteConfig[] = [
	{
		id: 'home',
		path: '/',
		outlet: 'main',
		defaultRoute: true,
		title: 'Custom Web App Development for Enterprises | SitePen'
	},
	{
		id: 'contact',
		path: 'contact',
		outlet: 'main',
		title: 'Contact | SitePen'
	},
	{
		id: 'expertise',
		path: 'expertise',
		outlet: 'main',
		title: 'Expertise | SitePen'
	},
	{
		id: 'work',
		path: 'our-work',
		outlet: 'main',
		title: 'Our Work | SitePen'
	},
	{
		id: 'services',
		path: 'services',
		outlet: 'main',
		title: 'Services | SitePen'
	},
	{
		id: 'privacy',
		path: 'privacy-policy',
		outlet: 'main',
		title: 'Privacy Policy | SitePen'
	},
	{
		id: 'opensource',
		path: 'open-source',
		outlet: 'main',
		title: 'Open Source | SitePen'
	},
	{
		id: 'about',
		path: 'about-us',
		outlet: 'main',
		title: 'About Us | SitePen'
	},
	{
		id: 'careers',
		path: 'careers',
		outlet: 'main',
		title: 'Careers | SitePen'
	},
	{
		id: 'casestudyFannie',
		path: 'case-study/fannie-mae',
		outlet: 'main',
		title: 'Modernizing & Automating Technology for Fannie Mae | SitePen'
	},
	{
		id: 'casestudyMarriott',
		path: 'case-study/marriott',
		outlet: 'main',
		title: 'Modernizing Apps &amp; Improving Usability for Marriott | SitePen'
	},
	{
		id: 'casestudyBuilt',
		path: 'case-study/built-technologies',
		outlet: 'main',
		title: 'Custom Web Application: Built Technologies | SitePen'
	},
	{
		id: 'casestudySocial',
		path: 'case-study/social-knowledge',
		outlet: 'main',
		title: 'Using React to Update Social Knowledge Platforms | SitePen'
	}
];

export default routes;
