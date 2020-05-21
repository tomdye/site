import { create, tsx } from '@dojo/framework/core/vdom';
import { Hero } from '../Hero';
import * as css from './OpenSource.m.css';
import * as commonCss from '../../Common.m.css';

export interface OpenSourceProperties {}

const factory = create().properties<OpenSourceProperties>();

export const OpenSource = factory(function OpenSource() {
	return (
		<div classes={css.root}>
			<div classes={css.heroWrapper}>
				<div classes={commonCss.contentWrapper}>
					<Hero>
						{{
							title: 'COMMITMENT TO',
							xlTitle: 'OPEN SOURCE SOFTWARE',
							blurb: `Collaboration | Commitment | Community`
						}}
					</Hero>
				</div>
			</div>
			<div classes={commonCss.contentWrapper}></div>
		</div>
	);
});

export default OpenSource;
