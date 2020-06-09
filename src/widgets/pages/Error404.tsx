import { create, tsx } from '@dojo/framework/core/vdom';
import { Hero } from '../Hero';
import * as commonCss from '../../Common.m.css';

export interface Error404Properties {}

const factory = create().properties<Error404Properties>();

export const Error404 = factory(function Error404() {
	return (
		<div classes={commonCss.contentWrapper} styles={{ background: 'blue' }}>
			<Hero>
				{{
					xlTitle: `Error404`
				}}
			</Hero>
		</div>
	);
});

export default Error404;
