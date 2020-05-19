import { create, tsx } from '@dojo/framework/core/vdom';
import * as css from './Home.m.css';
import { Hero } from '../Hero';

export interface HomeProperties {}

const factory = create().properties<HomeProperties>();

export const Home = factory(function Home() {
	return (
		<div classes={css.root}>
			HOME
			<Hero />
		</div>
	);
});

export default Home;
