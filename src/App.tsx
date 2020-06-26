import { create, tsx } from '@dojo/framework/core/vdom';
import { Outlet } from '@dojo/framework/routing/Outlet';
import { Footer } from './widgets/Footer';
import { Header } from './widgets/Header';
import { About } from './widgets/pages/About';
import { Careers } from './widgets/pages/Careers';
import { Contact } from './widgets/pages/Contact';
import { ContactThankyou } from './widgets/pages/ContactThankyou';
import { Expertise } from './widgets/pages/Expertise';
import { Home } from './widgets/pages/Home';
import { OpenSource } from './widgets/pages/OpenSource';
import { Privacy } from './widgets/pages/Privacy';
import { Services } from './widgets/pages/Services';
import { Work } from './widgets/pages/Work';
import * as css from './App.m.css';
import { CaseStudyFannie } from './widgets/pages/CaseStudyFannie';
import { CaseStudyMarriott } from './widgets/pages/CaseStudyMarriott';
import { CaseStudyBuilt } from './widgets/pages/CaseStudyBuilt';
import { CaseStudySocial } from './widgets/pages/CaseStudySocial';
import { OpenSourceDojo } from './widgets/pages/OpenSourceDojo';
import { OpenSourceIntern } from './widgets/pages/OpenSourceIntern';
import { OpenSourceTypescript } from './widgets/pages/OpenSourceTypescript';
import { OpenSourceDojoToolkit } from './widgets/pages/OpenSourceDojoToolkit';
import { OpenSourceDgrid } from './widgets/pages/OpenSourceDgrid';
import { GDPRBanner } from './widgets/GDPRBanner';
import { Error404 } from './widgets/pages/Error404';
import { BlogList } from './widgets/pages/BlogList';
import { Blog } from './widgets/pages/Blog';
import { Category } from './widgets/pages/Category';
import { Series } from './widgets/pages/Series';

const factory = create();

export const App = factory(function App() {
	return (
		<div classes={css.root}>
			<Header />
			<main>
				<div id="sentinel"></div>
				<Outlet id="main">
					{{
						about: <About />,
						careers: <Careers />,
						contact: <Contact />,
						contactThankyou: <ContactThankyou />,
						expertise: <Expertise />,
						home: <Home />,
						opensource: <OpenSource />,
						opensourceDojo: <OpenSourceDojo />,
						opensourceIntern: <OpenSourceIntern />,
						opensourceTypescript: <OpenSourceTypescript />,
						opensourceDojoToolkit: <OpenSourceDojoToolkit />,
						opensourceDgrid: <OpenSourceDgrid />,
						privacy: <Privacy />,
						services: <Services />,
						work: <Work />,
						casestudyFannie: <CaseStudyFannie />,
						casestudyMarriott: <CaseStudyMarriott />,
						casestudyBuilt: <CaseStudyBuilt />,
						casestudySocial: <CaseStudySocial />,
						category: ({ params: { slug } }) => <Category slug={slug} />,
						series: ({ params: { slug } }) => <Series slug={slug} />,
						blogs: ({ params: { page } }) => <BlogList page={parseInt(page)} />,
						blog: ({ params: { slug } }) => <Blog slug={slug} />,
						error404: <Error404 />
					}}
				</Outlet>
			</main>
			<Footer />
			<GDPRBanner />
		</div>
	);
});

export default App;
