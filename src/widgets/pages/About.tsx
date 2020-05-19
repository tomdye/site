import { create, tsx } from '@dojo/framework/core/vdom';
import * as css from './About.m.css';
export interface AboutProperties {}

const factory = create().properties<AboutProperties>();

export const About = factory(function About() {
	return <div classes={css.root}>About</div>;
});

export default About;
