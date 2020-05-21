import { create, tsx } from '@dojo/framework/core/vdom';
import { Hero } from '../Hero';
import * as css from './Contact.m.css';
import * as commonCss from '../../Common.m.css';

export interface ContactProperties {}

const factory = create().properties<ContactProperties>();

export const Contact = factory(function Contact() {
	return (
		<div classes={css.root}>
			<div classes={css.heroWrapper}>
				<div classes={commonCss.contentWrapper}>
					<Hero>
						{{
							xlTitle: `LET'S CONNECT`
						}}
					</Hero>
				</div>
			</div>
			<div classes={commonCss.contentWrapper}></div>
		</div>
	);
});

export default Contact;
