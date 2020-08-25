import { create, tsx } from '@dojo/framework/core/vdom';
import * as css from './ConnectButton.m.css';
import { Link } from '@dojo/framework/routing/Link';

export interface ConnectSessionButtonProperties {
	slug: string;
}

const factory = create().properties<ConnectSessionButtonProperties>();

export const ConnectSessionButton = factory(function ConnectSessionButton() {
	return (
		<Link classes={[css.root, css.cta]} to="strategySession">
			Let's connect
		</Link>
	);
});

export default ConnectSessionButton;
