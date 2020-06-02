import { create, tsx } from '@dojo/framework/core/vdom';
import { Hero } from '../Hero';
import * as css from './About.m.css';
import * as commonCss from '../../Common.m.css';
import { Link } from '@dojo/framework/routing/Link';

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
			<div classes={css.wrapper}>
				<p classes={css.intro}>
					SitePen is a leading strategic consultancy based in the USA. Our company is
					committed to achieving technical objectives, solving critical business problems,
					and <Link to="ourwork">helping our customers build web applications</Link> the
					right way, the first time.
				</p>
				<p classes={css.intro}>
					With nearly two decades of experience developing software, we believe the
					Enterprise has more opportunities than ever to gain efficiencies across the
					organization, given the acceptance and adoption of new approaches to technology,
					lean process, and the evolving open web. We are ready to help your organization
					realize its potential and achieve desired and predictable results.
				</p>
			</div>
		</div>
	);
});

export default About;
