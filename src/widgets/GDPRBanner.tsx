import { create, tsx } from '@dojo/framework/core/vdom';
import * as css from './GDPRBanner.m.css';
import { createICacheMiddleware } from '@dojo/framework/core/middleware/icache';
import { Link } from '@dojo/framework/routing/Link';

const factory = create({ icache: createICacheMiddleware<{ hidden: boolean }>() });

export const GDPRBanner = factory(function GDPRBanner({ middleware: { icache } }) {
	if (document.cookie.indexOf('sitepenCookieConsent=accepted') > -1) {
		icache.set('hidden', true);
	}

	const hidden = icache.getOrSet('hidden', false);

	return (
		<div id="gdpr-banner" classes={[css.root, hidden && css.hidden]}>
			We use cookies to ensure that we give you the best experience on our website. If you
			continue to use this site we will assume that you are happy with it.
			<button
				id="gdpr-accept"
				type="button"
				classes={css.button}
				onclick={(e: Event) => {
					e.stopPropagation();
					const date = new Date();
					date.setTime(date.getTime() + 24 * 60 * 60 * 1000 * 28);
					document.cookie = `sitepenCookieConsent=accepted; expires=${date.toUTCString()}; path=/`;
					icache.set('hidden', true);
				}}
			>
				OK
			</button>
			<Link classes={css.button} to="privacy">
				Privacy Policy
			</Link>
		</div>
	);
});

export default GDPRBanner;
