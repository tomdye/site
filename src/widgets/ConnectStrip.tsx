import { create, tsx } from '@dojo/framework/core/vdom';
import * as css from './ConnectStrip.m.css';
import * as commonCss from '../Common.m.css';
import { ConnectButton } from './ConnectButton';

const factory = create();

export const ConnectStrip = factory(function ConnectStrip() {
	return (
		<div classes={css.root}>
			<div classes={commonCss.contentWrapper}>
				<h2 classes={css.title}>WE'D LOVE TO HEAR FROM YOU</h2>
				<h3 classes={css.blurb}>
					Whether you need help with a current or upcoming project, initial advice and
					consultation, or just want to introduce yourself.
				</h3>
				<ConnectButton />
			</div>
		</div>
	);
});

export default ConnectStrip;
