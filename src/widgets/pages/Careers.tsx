import { create, tsx } from '@dojo/framework/core/vdom';
import * as css from './Careers.m.css';

export interface CareersProperties {}

const factory = create().properties<CareersProperties>();

export const Careers = factory(function Careers() {
	return <div classes={css.root}>Careers</div>;
});

export default Careers;
