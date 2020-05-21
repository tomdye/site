import { create, tsx } from '@dojo/framework/core/vdom';
import { Hero } from '../Hero';
import * as css from './Careers.m.css';
import * as commonCss from '../../Common.m.css';

export interface CareersProperties {}

const factory = create().properties<CareersProperties>();

export const Careers = factory(function Careers() {
	return (
		<div classes={css.root}>
			<div classes={css.heroWrapper}>
				<div classes={commonCss.contentWrapper}>
					<Hero>
						{{
							xlTitle: 'JOIN OUR TEAM'
						}}
					</Hero>
				</div>
			</div>
			<div classes={commonCss.contentWrapper}></div>
		</div>
	);
});

export default Careers;
