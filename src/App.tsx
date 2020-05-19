import { create, tsx } from '@dojo/framework/core/vdom';
import { Outlet } from '@dojo/framework/routing/Outlet';
import { Footer } from './widgets/Footer';
import { Header } from './widgets/Header';
import { About } from './widgets/pages/About';
import { Careers } from './widgets/pages/Careers';
import { Contact } from './widgets/pages/Contact';
import { Expertise } from './widgets/pages/Expertise';
import { Home } from './widgets/pages/Home';
import { OpenSource } from './widgets/pages/OpenSource';
import { Privacy } from './widgets/pages/Privacy';
import { Services } from './widgets/pages/Services';
import { Work } from './widgets/pages/Work';
import * as css from './App.m.css';

export interface AppProperties {}

const factory = create().properties<AppProperties>();

export const App = factory(function App() {
	return (
		<div classes={css.root}>
			<Header />
			<main classes={css.wrapper}>
				<Outlet id="main">
					{{
						about: <About />,
						careers: <Careers />,
						contact: <Contact />,
						expertise: <Expertise />,
						home: <Home />,
						opensource: <OpenSource />,
						privacy: <Privacy />,
						services: <Services />,
						work: <Work />
					}}
				</Outlet>
			</main>
			<Footer />
		</div>
	);
});

export default App;
