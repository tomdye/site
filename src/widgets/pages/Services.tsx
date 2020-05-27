import { create, tsx } from '@dojo/framework/core/vdom';
import { Hero } from '../Hero';
import * as css from './Services.m.css';
import * as commonCss from '../../Common.m.css';
import { ConnectStrip } from '../ConnectStrip';
const elevateIcon = require('../../assets/images/icons/elevate.svg');
const guideIcon = require('../../assets/images/icons/guide.svg');
const communicationIcon = require('../../assets/images/icons/communication.svg');
const knowledgeIcon = require('../../assets/images/icons/knowledge.svg');

export interface ServicesProperties {}

const factory = create().properties<ServicesProperties>();

export const Services = factory(function Services() {
	return (
		<div classes={css.root}>
			<div classes={css.heroWrapper}>
				<div classes={commonCss.contentWrapper}>
					<Hero>
						{{
							title: 'ACHIEVE YOUR WEB APP DEVELOPMENT GOALS',
							xlTitle: 'WITH CONFIDENCE'
						}}
					</Hero>
				</div>
			</div>
			<div classes={commonCss.contentWrapper}>
				<section classes={css.topSection}>
					<div classes={css.leading}>
						<h3>
							Developing enterprise web applications requires a lot more than an
							office-full of developers waiting for instructions.
						</h3>
					</div>
					<div classes={css.trailing}>
						<p>You need an agile team who is constantly moving forward to:</p>
						<ul classes={css.servicesList}>
							<li classes={css.servicesItem}>
								<img src={elevateIcon} /> Elevate your technical capabilities
							</li>
							<li classes={css.servicesItem}>
								<img src={guideIcon} /> Guide significant decisions
							</li>
							<li classes={css.servicesItem}>
								<img src={communicationIcon} /> Keep communication frequent and open
							</li>
							<li classes={css.servicesItem}>
								<img src={knowledgeIcon} /> Share knowledge about the right tech,
								tools, and standards
							</li>
						</ul>
						<p>
							All of this to establish a healthy velocity to get your app through to
							production as efficiently as possible.
						</p>
						<p>
							As leaders in enterprise development services and with our position at
							the forefront of the modern web, we offer a partnership that will
							optimize your approach in all areas of development and instill
							confidence in meeting your company’s objectives.
						</p>
					</div>
				</section>
			</div>
			<ConnectStrip />
		</div>
	);
});

export default Services;
