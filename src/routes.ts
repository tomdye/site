export default [
	{
		path: 'home',
		outlet: 'home',
		defaultRoute: true
	},
	{
		path: 'blog',
		outlet: 'blog',
		children: [
			{
				path: '{path}',
				outlet: 'blog-post'
			}
		]
	},
	{
		path: 'examples',
		outlet: 'examples'
	},
	{
		path: 'playground',
		outlet: 'playground'
	},
	{
		path: 'roadmap',
		outlet: 'roadmap'
	},
	{
		path: 'community',
		outlet: 'community'
	},
	{
		path: 'reference-guides',
		outlet: 'reference-guides'
	},
	{
		path: 'reference-guides/i18n/{page}',
		outlet: 'reference-guide-i18n'
	},
	{
		path: 'reference-guides/styling-and-theming/{page}',
		outlet: 'reference-guide-styling-and-theming'
	},
	{
		path: 'reference-guides/routing/{page}',
		outlet: 'reference-guide-routing'
	}
];
