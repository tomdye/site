import { create, tsx } from '@dojo/framework/core/vdom';
import * as css from './OpenSource.m.css';

export interface OpenSourceProperties {}

const factory = create().properties<OpenSourceProperties>();

export const OpenSource = factory(function OpenSource() {
	return <div classes={css.root}>OpenSource</div>;
});

export default OpenSource;
