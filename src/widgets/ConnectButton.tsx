import { create, tsx } from '@dojo/framework/core/vdom';
import * as css from './ConnectButton.m.css';
import { Link } from '@dojo/framework/routing/Link';

export interface ConnectButtonProperties {
	inverse?: boolean;
	cta?: boolean;
	expertise?: boolean;
}

const factory = create().properties<ConnectButtonProperties>();

export const ConnectButton = factory(function ConnectButton({ properties }) {
	const { inverse, cta, expertise } = properties();

	return (
		<Link
			classes={[css.root, inverse && css.inverse, cta && css.cta, expertise && css.expertise]}
			to="contact"
		>
			Let's connect
		</Link>
	);
});

export default ConnectButton;
