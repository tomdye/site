import { create, tsx } from '@dojo/framework/core/vdom';
import * as css from './Hero.m.css';
import { RenderResult } from '@dojo/framework/core/interfaces';
import { ConnectButton } from './ConnectButton';

export interface HeroChildren {
	title?: RenderResult;
	xlTitle?: RenderResult;
	blurb?: RenderResult;
}

export interface HeroProperties {
	connect?: boolean;
}

const factory = create().children<HeroChildren>().properties<HeroProperties>();

export const Hero = factory(function Hero({ children, properties }) {
	const [{ title, xlTitle, blurb }] = children();
	const { connect } = properties();

	return (
		<div classes={css.root}>
			<h1>
				{title && <div classes={css.title}>{title}</div>}
				{xlTitle && <div classes={css.xlTitle}>{xlTitle}</div>}
			</h1>
			{blurb && <p classes={css.blurb}>{blurb}</p>}
			{connect && (
				<span classes={css.buttonWrapper}>
					<ConnectButton inverse />
				</span>
			)}
		</div>
	);
});

export default Hero;
