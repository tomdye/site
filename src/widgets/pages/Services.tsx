import { create, tsx } from '@dojo/framework/core/vdom';
import { Hero } from '../Hero';
import * as css from './Services.m.css';
import * as commonCss from '../../Common.m.css';

export interface ServicesProperties {}

const factory = create().properties<ServicesProperties>();

export const Services = factory(function Services() {
	return (
		<div classes={css.root}>
			<div classes={css.heroWrapper}>
				<div classes={commonCss.contentWrapper}>
					<Hero>
						{{
							title: 'ACHIEVE YOUR WEB APP DEVELOPMENT GOALS',
							xlTitle: 'WITH CONFIDENCE'
						}}
					</Hero>
				</div>
			</div>
			<div classes={commonCss.contentWrapper}></div>
		</div>
	);
});

export default Services;
