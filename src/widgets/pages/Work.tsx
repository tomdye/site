import { create, tsx } from '@dojo/framework/core/vdom';
import { Hero } from '../Hero';
import * as css from './Work.m.css';
import * as commonCss from '../../Common.m.css';

export interface WorkProperties {}

const factory = create().properties<WorkProperties>();

export const Work = factory(function Work() {
	return (
		<div classes={css.root}>
			<div classes={css.heroWrapper}>
				<div classes={commonCss.contentWrapper}>
					<Hero>
						{{
							title: 'CONTINUOUS DELIVERY OF',
							xlTitle: 'POSITIVE RESULTS',
							blurb: 'For Our Customers and the Open Source Community'
						}}
					</Hero>
				</div>
			</div>
			<div classes={commonCss.contentWrapper}></div>
		</div>
	);
});

export default Work;
