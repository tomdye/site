import { create, tsx } from '@dojo/framework/core/vdom';
import { Hero } from '../Hero';
import * as css from './Contact.m.css';
import * as commonCss from '../../Common.m.css';
const respectImg = require('../../assets/images/about/respect.svg');

const factory = create();

export const ContactThankyou = factory(function ContactThankyou() {
	return (
		<div classes={css.root}>
			<div classes={css.heroWrapper}>
				<div classes={commonCss.contentWrapper}>
					<Hero>
						{{
							title: `let's connect`,
							xlTitle: `THANK YOU`
						}}
					</Hero>
				</div>
			</div>
			<div classes={[commonCss.smallerContentWrapper, css.thankyouBody]}>
				<img src={respectImg} alt="Illustration of Respect" />
				<br />
				<p>
					Thank you for contacting us! We look forward to speaking with you and will be in
					touch shortly.
				</p>
				<p>
					In the meantime, check out what we have been discussing on our podcast series{' '}
					<a
						href="https://www.sitepen.com/typescript-javascript-podcast/"
						target="_blank"
						rel="noopener"
					>
						TalkScript
					</a>
					.
				</p>
			</div>
		</div>
	);
});

export default ContactThankyou;
