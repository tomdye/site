import { create, tsx } from '@dojo/framework/core/vdom';
import { Hero } from '../Hero';
import * as css from './About.m.css';
import * as commonCss from '../../Common.m.css';

export interface AboutProperties {}

const factory = create().properties<AboutProperties>();

export const About = factory(function About() {
	return (
		<div classes={css.root}>
			<div classes={css.heroWrapper}>
				<div classes={commonCss.contentWrapper}>
					<Hero>
						{{
							title: 'ENTERPRISE JAVASCRIPT',
							xlTitle: 'DEVELOPMENT EXPERTS'
						}}
					</Hero>
				</div>
			</div>
			<div classes={commonCss.contentWrapper}></div>
		</div>
	);
});

export default About;
