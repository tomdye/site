export type BlogConnectConfig = { [slug: string]: string };

export const config: BlogConnectConfig = {
	/* dojo */
	'json-referencing-in-dojo': 'dojo',
	'dojo-faq-why-am-i-getting-error-tried-to-register-widget-with-idxxx-but-that-id-is-already-registered':
		'dojo',
	'debugging-dojo-common-error-messages': 'dojo',
	'faq-cors-with-dojo': 'dojo',
	'dojo-faq-how-can-i-sequence-asynchronous-operations': 'dojo',
	'understanding-deferreds-and-promises-in-dojo': 'dojo',
	'dojo-drag-and-drop-1': 'dojo',
	'dojo-mixing-dojo-widgets-and-angular-2-components': 'dojo',
	'dojo-drag-n-drop-redux': 'dojo',
	'dojo-faq-what-is-the-difference-packages-vs-paths-vs-aliases': 'dojo',

	/* testing */
	'performance-testing-with-k6': 'testing',
	'what-makes-intern-different': 'testing',
	'why-automated-testing-matters': 'testing',
	'writing-tests-that-work': 'testing',
	'testing-typescript-with-intern-4': 'testing',
	'web-frameworks-testing': 'testing',

	/* typescript */
	'advanced-typescript-concepts-classes-and-types': 'typescript',
	'update-the-definitive-typescript-guide': 'typescript',
	'typescript-cheat-sheet': 'typescript',
	'getting-started-with-electron-typescript-react-and-webpack': 'typescript',
	'progressively-adopting-typescript-in-a-dojo-toolkit-application': 'typescript',
	'progressively-adopting-typescript-in-an-application': 'typescript',
	'sensible-improvements-in-typescript-3-9': 'typescript',

	/* process */
	'disciplined-engineering-part-1-building-an-engineering-process': 'process',
	'disciplined-engineering-part-2-creating-code-confidence': 'process',
	'disciplined-engineering-part-3-refining-your-engineering-process': 'process',
	'increasing-value-in-your-software-development-lifecycle': 'process',
	'a-smooth-transition-designing-for-the-development-handoff': 'process',
	'business-analysis-one-of-the-overlooked-areas-of-successful-software-development': 'process',

	/* architecture */
	'what-is-a-2nd-generation-framework': 'architecture',
	'architecture-spotlight-event-sourcing-part-two': 'architecture',
	'the-importance-of-good-software-architecture': 'architecture',
	'architecture-spotlight-event-sourcing': 'architecture'
};

export default config;
