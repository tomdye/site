import { create, tsx } from '@dojo/framework/core/vdom';
import * as css from './Contact.m.css';

export interface ContactProperties {}

const factory = create().properties<ContactProperties>();

export const Contact = factory(function Contact() {
	return <div classes={css.root}>Contact</div>;
});

export default Contact;
