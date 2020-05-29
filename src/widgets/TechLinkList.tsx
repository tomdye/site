import { create, tsx } from '@dojo/framework/core/vdom';
import * as css from './TechLinkList.m.css';

const links = {
	angular: 'https://angular.io/',
	jasmine: 'https://jasmine.github.io/',
	javascript: 'https://www.javascript.com/',
	ngrx: 'https://ngrx.io/',
	protractor: 'https://www.protractortest.org/',
	spring: 'https://spring.io/',
	typescript: 'http://www.typescriptlang.org/',
	dojoToolkit: 'https://dojotoolkit.org/',
	dgrid: 'https://dgrid.io/',
	dstore: 'https://dstorejs.io/',
	intern: 'https://theintern.io/',
	react: 'https://reactjs.org/',
	canjs: 'https://canjs.com/',
	php: 'https://www.php.net/',
	jest: 'https://jestjs.io/',
	reactNative: 'https://facebook.github.io/',
	redux: 'https://redux.js.org/',
	mobx: 'https://mobx.js.org/'
};

export type TechLinkType = keyof typeof links;

export interface TechLinkProperties {
	type: TechLinkType;
}

export interface TechLinkListProperties {
	types: TechLinkType[];
}

const techLinkFactory = create().properties<TechLinkProperties>();

const TechLink = techLinkFactory(function TechLink({ properties }) {
	const { type } = properties();
	const icon = require(`../assets/images/tech/${type}.png`);
	const href = links[type];

	return (
		<a href={href} target="_blank" rel="noopener" title={type}>
			<img src={icon} alt={`Logo for ${type}`} />
		</a>
	);
});

const techLinkListFactory = create().properties<TechLinkListProperties>();

export const TechLinkList = techLinkListFactory(function TechLinkList({ properties }) {
	const { types } = properties();
	return (
		<div classes={css.root}>
			<h3>TECHNOLOGIES</h3>
			<ul>
				{types.map((type) => (
					<li>
						<TechLink type={type} />
					</li>
				))}
			</ul>
		</div>
	);
});

export default TechLinkList;
