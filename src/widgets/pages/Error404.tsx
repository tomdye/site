import { create, tsx } from '@dojo/framework/core/vdom';
import { Hero } from '../Hero';
import * as commonCss from '../../Common.m.css';
import * as css from './Error404.m.css';

export interface Error404Properties {}

const factory = create().properties<Error404Properties>();

export const Error404 = factory(function Error404() {
	return (
		<div classes={css.heroWrapper}>
			<div classes={commonCss.contentWrapper}>
				<Hero>
					{{
						title: 'Error 404',
						xlTitle: `PAGE NOT FOUND`,
						blurb:
							'The link you clicked may be broken or the page may have been removed.'
					}}
				</Hero>
			</div>
		</div>
	);
});

export default Error404;
