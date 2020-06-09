import { create, tsx } from '@dojo/framework/core/vdom';
import { Hero } from '../Hero';
import * as css from './About.m.css';
import * as commonCss from '../../Common.m.css';
import { Link } from '@dojo/framework/routing/Link';
import { ConnectStrip } from '../ConnectStrip';
const integrityImg = require('../../assets/images/about/integrity.svg');
const knowledgeImg = require('../../assets/images/about/knowledge.svg');
const respectImg = require('../../assets/images/about/respect.svg');

const factory = create();

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
			<div classes={commonCss.smallerContentWrapper}>
				<p classes={css.intro}>
					SitePen is a leading strategic consultancy based in the USA. Our company is
					committed to achieving technical objectives, solving critical business problems,
					and <Link to="work">helping our customers build web applications</Link> the
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
			<div classes={commonCss.smallerContentWrapper}>
				<h2 classes={commonCss.heading}>Our Philosophy</h2>
				<p>
					Our people are our success. We bring together the expertise and experience of
					talented professionals who are born to solve problems, move with purpose, and
					develop elegant, pragmatic solutions to every challenge. To attract and retain
					these amazing people, we strive to uphold three core values:
				</p>
				<ul classes={css.list}>
					<li classes={css.item}>
						<div classes={css.leading}>
							<img classes={css.img} src={knowledgeImg} alt="Knowledge Icon" />
						</div>
						<div>
							<h3 classes={commonCss.subheading}>Knowledge</h3>
							<p>
								Our continuous focus on learning, research, and experimentation
								allows us to hone all aspects of our approach to lean application
								development.
							</p>
						</div>
					</li>
					<li classes={css.item}>
						<div classes={css.leading}>
							<img classes={css.img} src={respectImg} alt="Respect Icon" />
						</div>
						<div>
							<h3 classes={commonCss.subheading}>Respect</h3>
							<p>
								We nurture a team culture that promotes a healthy, sustainable
								work-life balance, one that is always supportive and respectful of
								everyone with whom we interact.
							</p>
						</div>
					</li>
					<li classes={css.item}>
						<div classes={css.leading}>
							<img
								classes={[css.img, css.integrityImg]}
								src={integrityImg}
								alt="Integrity Icon"
							/>
						</div>
						<div>
							<h3 classes={commonCss.subheading}>Integrity</h3>
							<p>
								We never price an engagement to win business. We strive to sell our
								services in a way that balances honesty and effort with the
								exceptional capabilities of our team.
							</p>
						</div>
					</li>
				</ul>
				<p>
					We are proud to offer true <Link to="expertise">enterprise expertise</Link>,
					industry leadership, a great customer experience, predictability and dedicated
					partnership to help you reach your goals and take on the next ones.
				</p>
			</div>
			<ConnectStrip />
		</div>
	);
});

export default About;
