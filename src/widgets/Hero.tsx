import { create, tsx } from '@dojo/framework/core/vdom';
import * as css from './Hero.m.css';

export interface HeroProperties {}

const factory = create().properties<HeroProperties>();

export const Hero = factory(function Hero({}) {
	return <div classes={css.root}>Hero</div>;
});

export default Hero;
