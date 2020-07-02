import * as css from './LoadingIndicator.m.css';
import { create, tsx } from '@dojo/framework/core/vdom';

const factory = create();

export const LoadingIndicator = factory(function LoadingIndicator() {
	return (
		<div classes={css.root} role="progressbar">
			<div classes={css.bar}></div>
		</div>
	);
});

export default LoadingIndicator;
