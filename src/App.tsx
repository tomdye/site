import { create, tsx } from '@dojo/framework/core/vdom';
import { Header } from './widgets/Header';
import { Hero } from './widgets/Hero';
import { Footer } from './widgets/Footer';
import { Outlet } from '@dojo/framework/routing/Outlet';
import { Home } from './widgets/pages/Home';
import { Contact } from './widgets/pages/Contact';
import { Expertise } from './widgets/pages/Expertise';
import { Services } from './widgets/pages/Services';
import * as css from './App.m.css';
import { Work } from './widgets/pages/Work';

export interface AppProperties {}

const factory = create().properties<AppProperties>();

export const App = factory(function App({}) {
	return (
		<div classes={css.root}>
			<Header />
			<Outlet id="main">
				{{
					home: <Home />,
					contact: <Contact />,
					expertise: <Expertise />,
					services: <Services />,
					work: <Work />
				}}
			</Outlet>
			<Hero />
			<Footer />
		</div>
	);
});

export default App;
