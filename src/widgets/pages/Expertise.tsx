import { create, tsx } from '@dojo/framework/core/vdom';
import * as css from './Expertise.m.css';
export interface ExpertiseProperties {}

const factory = create().properties<ExpertiseProperties>();

export const Expertise = factory(function Expertise({}) {
	return <div classes={css.root}>Expertise</div>;
});

export default Expertise;
