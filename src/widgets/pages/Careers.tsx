import { create, tsx } from '@dojo/framework/core/vdom';
import { Hero } from '../Hero';
import * as css from './Careers.m.css';
import * as commonCss from '../../Common.m.css';
import { Summary } from '../Summary';
const commuteIcon = require('../../assets/images/icons/commute.svg');
const dentalIcon = require('../../assets/images/icons/dental.svg');
const hoursIcon = require('../../assets/images/icons/hours.svg');
const peopleIcon = require('../../assets/images/icons/people.svg');
const loveIcon = require('../../assets/images/icons/love.svg');
const spendingIcon = require('../../assets/images/icons/spending.svg');
const pensionIcon = require('../../assets/images/icons/pension.svg');
const insuranceIcon = require('../../assets/images/icons/insurance.svg');
const vacationIcon = require('../../assets/images/icons/vacation.svg');
const doneImage = require('../../assets/images/careers/done.svg');
const projectsImage = require('../../assets/images/careers/projects.svg');
const teamImage = require('../../assets/images/careers/team.svg');

const factory = create();

export const Careers = factory(function Careers() {
	return (
		<div classes={css.root}>
			<div classes={css.heroWrapper}>
				<div classes={commonCss.contentWrapper}>
					<Hero>
						{{
							xlTitle: 'JOIN OUR TEAM'
						}}
					</Hero>
				</div>
			</div>
			<div classes={commonCss.smallerContentWrapper}>
				<Summary trailingBias smaller>
					{{
						title: 'Leading Edge Projects',
						image: <img src={projectsImage} alt="Illustration of projects" />,
						blurb:
							'While everyone else was building apps with Angular.js or Backbone, we were busy working on modern fullstack JavaScript and TypeScript architectures, prioritizing developer ergonomics, and developing frameworks for high-performance, sustainable Web apps. We invent tomorrow’s technologies to make the Web better, faster, and easier every day. And you can be part of it!'
					}}
				</Summary>
				<Summary trailingBias smaller>
					{{
						title: 'An Amazing Team',
						image: <img loading="lazy" src={teamImage} alt="Illustration of team" />,
						blurb:
							'SitePen has one of the most talented and engaged software development teams around. If you’re self-motivated, know how to throw out a bad pun, get a kick out of Internet memes, and have a passion for Web development, solving difficult problems, and building open source software, you’ll fit right in.'
					}}
				</Summary>
				<Summary trailingBias smaller>
					{{
						title: 'Getting Things Done',
						image: <img loading="lazy" src={doneImage} alt="Illustration of done" />,
						blurb:
							'When you’re part of the SitePen team, you’ll always be working on something new and interesting. Our flat organizational structure and collaborative management style gives everyone the opportunity to take initiative without any middle managers getting in the way.'
					}}
				</Summary>
			</div>
			<div classes={commonCss.contentWrapper}>
				<h2 classes={[commonCss.heading, commonCss.centered, css.superThingsTitle]}>
					Some Super Things About Working Here
				</h2>
				<ul classes={css.list}>
					<li classes={css.item}>
						<img classes={css.itemIcon} src={commuteIcon} alt="Icon for commute" />
						<div classes={css.itemTitle}>ZERO COMMUTE TIME</div>
						<p>The only traffic you’ll ever get stuck in is a series of tubes.</p>
					</li>
					<li classes={css.item}>
						<img classes={css.itemIcon} src={vacationIcon} alt="Icon for vacation" />
						<div classes={css.itemTitle}>SEVEN WEEKS PAID VACATION</div>
						<p>
							With one month of personal time off plus a week of sick time plus ten
							paid holidays per year, you can finally test that model rocket
						</p>
					</li>
					<li classes={css.item}>
						<img classes={css.itemIcon} src={insuranceIcon} alt="Icon for insurance" />
						<div classes={css.itemTitle}>REALLY GOOD HEALTH INSURANCE</div>
						<p>
							Once our fountain of youth is finished, we hope to save a bundle on
							healthcare.
						</p>
					</li>
					<li classes={css.item}>
						<img
							classes={css.itemIcon}
							loading="lazy"
							src={pensionIcon}
							alt="Icon for pension"
						/>
						<div classes={css.itemTitle}>401(K) WITH MATCHING</div>
						<p>
							Our plan administrator thought we were nuts to do a match. He also
							thought he was a squirrel. Kinda awkward.
						</p>
					</li>
					<li classes={css.item}>
						<img
							classes={css.itemIcon}
							loading="lazy"
							src={spendingIcon}
							alt="Icon for spending"
						/>
						<div classes={css.itemTitle}>FLEXIBLE SPENDING ACCOUNT</div>
						<p>
							We’re not saying you’re accident-prone, but we do want to make sure all
							those first aid kits won’t lead to bankruptcy.
						</p>
					</li>
					<li classes={css.item}>
						<img
							classes={css.itemIcon}
							loading="lazy"
							src={dentalIcon}
							alt="Icon for dental"
						/>
						<div classes={css.itemTitle}>DENTAL DISCOUNTS</div>
						<p>
							With all the sweet things you’ll be doing, our dental plan makes sure
							the sugar won’t rot your teeth.
						</p>
					</li>
					<li classes={css.item}>
						<img
							classes={css.itemIcon}
							loading="lazy"
							src={hoursIcon}
							alt="Icon for hours"
						/>
						<div classes={css.itemTitle}>FLEXIBLE HOURS</div>
						<p>
							You’re the boss of your time. For your own sake, we hope you’re not a
							bad boss.
						</p>
					</li>
					<li classes={css.item}>
						<img
							classes={css.itemIcon}
							loading="lazy"
							src={loveIcon}
							alt="Icon for love"
						/>
						<div classes={css.itemTitle}>DO WHAT YOU LOVE</div>
						<p>
							We are, of course, referring to developing amazing Web apps. We don’t
							really need a lepidopterist.
						</p>
					</li>
					<li classes={css.item}>
						<img
							classes={css.itemIcon}
							loading="lazy"
							src={peopleIcon}
							alt="Icon for people"
						/>
						<div classes={css.itemTitle}>A team you'll love</div>
						]]{' '}
						<p>
							With their spectacular wit, intellect, and good looks, SitePenners are
							one of the best reasons to work here.
						</p>
					</li>
				</ul>
				<h3 classes={[commonCss.heading, commonCss.centered]}>
					We're on the lookout for...
				</h3>
				<div classes={css.openPositions}>
					There are no open positions at this time. Please check back soon!
				</div>
			</div>
		</div>
	);
});

export default Careers;
