import { create, tsx } from '@dojo/framework/core/vdom';
import { Hero } from '../Hero';
import * as css from './Expertise.m.css';
import * as commonCss from '../../Common.m.css';

export interface ExpertiseProperties {}

const factory = create().properties<ExpertiseProperties>();

export const Expertise = factory(function Expertise() {
	return (
		<div classes={css.root}>
			<div classes={css.heroWrapper}>
				<div classes={commonCss.contentWrapper}>
					<Hero>
						{{
							title: 'A COMPLETE ENTERPRISE',
							xlTitle: 'DEVELOPMENT TEAM'
						}}
					</Hero>
				</div>
			</div>
			<div classes={commonCss.contentWrapper}></div>
		</div>
	);
});

export default Expertise;
