import { create, tsx } from '@dojo/framework/core/vdom';
import { Hero } from '../Hero';
import * as css from './Contact.m.css';
import * as commonCss from '../../Common.m.css';
const respectImg = require('../../assets/images/about/respect.svg');

const factory = create();

export const ContactThankyou = factory(function ContactThankyou() {
	return (
		<div classes={css.root}>
			<head>
				<title>Contact Us | SitePen</title>
				<meta
					name="description"
					content="Headquartered in Palo Alto, CA, we are located throughout the US and UK. Call us at 650-968-8787 or drop us a note to hello@sitepen.com. We&#039;ll get back to you ASAP."
				/>
				<meta name="robots" content="index, follow" />
				<meta
					name="googlebot"
					content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
				/>
				<meta
					name="bingbot"
					content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
				/>
				<link rel="canonical" href="https://www.sitepen.com/contact-thank-you/" />
				<meta property="og:locale" content="en_US" />
				<meta property="og:type" content="article" />
				<meta property="og:title" content="Contact Us | SitePen" />
				<meta
					property="og:description"
					content="Headquartered in Palo Alto, CA, we are located throughout the US and UK. Call us at 650-968-8787 or drop us a note to hello@sitepen.com. We&#039;ll get back to you ASAP."
				/>
				<meta property="og:url" content="https://www.sitepen.com/contact-thank-you/" />
				<meta property="og:site_name" content="SitePen" />
				<meta property="article:publisher" content="https://www.facebook.com/SitePen" />
				<meta
					property="og:image"
					content="https://wp.sitepen.com/wp-content/uploads/2020/01/favicon.png"
				/>
				<meta property="og:image:width" content="512" />
				<meta property="og:image:height" content="512" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:creator" content="@SitePen" />
				<meta name="twitter:site" content="@SitePen" />
			</head>
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
				<img classes={css.thankyouImage} src={respectImg} alt="Illustration of Respect" />
				<p>
					Thank you for contacting us! We look forward to speaking with you and will be in
					touch shortly.
				</p>
				<p>
					In the meantime, check out what we have been discussing on our podcast series{' '}
					<a href="https://talkscript.sitepen.com" target="_blank" rel="noopener">
						TalkScript
					</a>
					.
				</p>
			</div>
		</div>
	);
});

export default ContactThankyou;
