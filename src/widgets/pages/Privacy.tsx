import { create, tsx } from '@dojo/framework/core/vdom';
import * as css from './Privacy.m.css';
export interface ContactProperties {}

const factory = create().properties<ContactProperties>();

export const Privacy = factory(function Privacy() {
	return <div classes={css.root}>Privacy</div>;
});

export default Privacy;
