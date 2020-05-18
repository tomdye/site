import { create, tsx } from '@dojo/framework/core/vdom';
import * as css from './Footer.m.css';

export interface FooterProperties {}

const factory = create().properties<FooterProperties>();

export const Footer = factory(function Footer({}) {
	return <div classes={css.root}>Footer</div>;
});

export default Footer;
