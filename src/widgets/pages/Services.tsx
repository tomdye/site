import { create, tsx } from '@dojo/framework/core/vdom';
import * as css from './Services.m.css';
export interface ServicesProperties {}

const factory = create().properties<ServicesProperties>();

export const Services = factory(function Services() {
	return <div classes={css.root}>Services</div>;
});

export default Services;
