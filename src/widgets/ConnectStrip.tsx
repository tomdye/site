import { create, tsx } from '@dojo/framework/core/vdom';
import * as css from './ConnectStrip.m.css';
import * as commonCss from '../Common.m.css';
import { ConnectButton } from './ConnectButton';

export interface ConnectStripProperties {
	variant?: 'expertise' | 'leverage';
}

const factory = create().properties<ConnectStripProperties>();

export const ConnectStrip = factory(function ConnectStrip({ properties }) {
	const { variant } = properties();
	let title = `WE'D LOVE TO HEAR FROM YOU`;
	let blurb = `Whether you need help with a current or upcoming project, initial advice and
	consultation, or just want to introduce yourself.`;

	if (variant === 'expertise') {
		title = 'OUR EXPERTISE PROPELS YOUR SUCCESS';
		blurb = `Accelerate progress toward your goals by leveraging an entire enterprise web development team, instantly.`;
	} else if (variant === 'leverage') {
		title = 'LEVERAGE OUR EXPERTISE';
		blurb = `Fill in the gaps and ensure you meet your business objectives on time, every time.`;
	}

	return (
		<div classes={[css.root, variant === 'expertise' && css.expertise]}>
			<div classes={commonCss.contentWrapper}>
				<h2 classes={css.title}>{title}</h2>
				<h3 classes={css.blurb}>{blurb}</h3>
				<ConnectButton />
			</div>
		</div>
	);
});

export default ConnectStrip;
