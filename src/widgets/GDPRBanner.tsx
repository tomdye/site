import { create, tsx } from '@dojo/framework/core/vdom';
import * as css from './GDPRBanner.m.css';
import { Link } from '@dojo/framework/routing/Link';

const factory = create();

export const GDPRBanner = factory(function GDPRBanner() {
	return (
		<div id="gdprbanner" classes={[css.root, 'hidden']}>
			We use cookies to ensure that we give you the best experience on our website. If you
			continue to use this site we will assume that you are happy with it.
			<button id="gdpraccept" type="button" classes={css.button}>
				OK
			</button>
			<Link classes={css.button} to="privacy">
				Privacy Policy
			</Link>
		</div>
	);
});

export default GDPRBanner;
