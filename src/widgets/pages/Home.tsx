import { create, tsx } from '@dojo/framework/core/vdom';
import * as css from './Home.m.css';
import * as commonCss from '../../Common.m.css';
import { Hero } from '../Hero';
import { Summary } from '../Summary';
import { ConnectStrip } from '../ConnectStrip';
const advisementImg = require('../../assets/images/home/advisement.svg');
const challengingImg = require('../../assets/images/home/challenging.svg');
const confidenceImg = require('../../assets/images/home/confidence.svg');
const dependImg = require('../../assets/images/home/depend.svg');

export interface HomeProperties {}

const factory = create().properties<HomeProperties>();

export const Home = factory(function Home() {
	return (
		<div classes={css.root}>
			<div classes={css.heroWrapper}>
				<div classes={commonCss.contentWrapper}>
					<Hero connect>
						{{
							title: 'ENTERPRISE WEB APPS',
							xlTitle: 'done right',
							blurb: `You have complex problems that need to be solved the right way the first time. You need the expertise, leadership and guidance on your team to connect your software strategy to execution. Partnering with us will ensure your solution is built with intelligent technology choices that allow you to scale for future flexibility and develop experiences that satisfy your users.`
						}}
					</Hero>
				</div>
			</div>
			<div classes={commonCss.contentWrapper}>
				<Summary>
					{{
						title: 'Solve your most challenging problems',
						blurb: `High engineering costs and stalled projects are common complaints for many companies. Our approach to creating healthy development organizations will quickly help you identify the “why” of these problems and our team will work to get you back to the business of moving efficiently toward your goals.`,
						image: challengingImg
					}}
				</Summary>
				<Summary reverse>
					{{
						title: 'Get continuous advisement throughout the SDLC',
						blurb: `You need a cross-functional team to understand your business and partner with you to define and incorporate strategy, design, and technology into all aspects of your product. Allowing for big-picture thinking to inform decisions in even the smallest details of a project creates and nurtures smart, engaged teams who care about delivering high-quality user experiences, as your web app continues to grow and evolve.`,
						image: advisementImg
					}}
				</Summary>
				<Summary>
					{{
						title: 'Envision the future with confidence',
						blurb: `Imagine leading a dedicated development team with unwavering confidence in its ability to tackle challenging problems, meet business objectives and deliver on a shared vision. With us as your partner, you’ll always have a technically validated project plan with an expert, cross-functional team producing high-quality results with care and predictability.`,
						image: confidenceImg
					}}
				</Summary>
				<Summary reverse>
					{{
						title: 'You can depend on us',
						blurb: `Imagine leading a dedicated development team with unwavering confidence in its ability to tackle challenging problems, meet business objectives and deliver on a shared vision. With us as your partner, you’ll always have a technically validated project plan with an expert, cross-functional team producing high-quality results with care and predictability.`,
						image: dependImg
					}}
				</Summary>
			</div>
			<ConnectStrip />
		</div>
	);
});

export default Home;
