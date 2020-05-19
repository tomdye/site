import { create, tsx } from '@dojo/framework/core/vdom';
import * as css from './Work.m.css';

export interface WorkProperties {}

const factory = create().properties<WorkProperties>();

export const Work = factory(function Work() {
	return <div classes={css.root}>Work</div>;
});

export default Work;
