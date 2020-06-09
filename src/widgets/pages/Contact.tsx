import { create, tsx } from '@dojo/framework/core/vdom';
import { Hero } from '../Hero';
import * as css from './Contact.m.css';
import * as commonCss from '../../Common.m.css';

const factory = create();

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
			<div classes={[commonCss.contentWrapper, css.content]}>
				<form
					accept-charset="UTF-8"
					action="https://forms.hubspot.com/uploads/form/v2/2059467/2e1a1b5b-27bb-447d-aac4-0b87c1e88fec"
					enctype="application/x-www-form-urlencoded"
					method="POST"
					classes={css.leading}
				>
					<div classes={css.row}>
						<div classes={css.field}>
							<label classes={css.label} for="firstname">
								First Name
								<span classes={css.required} aria-hidden="true">
									*
								</span>
							</label>
							<input
								classes={css.input}
								id="firstname"
								name="firstname"
								type="text"
								required
								autocomplete="given-name"
							/>
						</div>
						<div classes={css.field}>
							<label classes={css.label} for="lastname">
								Last Name
								<span classes={css.required} aria-hidden="true">
									*
								</span>
							</label>
							<input
								classes={css.input}
								id="lastname"
								name="lastname"
								type="text"
								required
								autocomplete="family-name"
							/>
						</div>
					</div>
					<div classes={css.row}>
						<div classes={css.field}>
							<label classes={css.label} for="company">
								Company Name
								<span classes={css.required} aria-hidden="true">
									*
								</span>
							</label>
							<input
								classes={css.input}
								id="company"
								name="company"
								type="text"
								required
								autocomplete="organization"
							/>
						</div>
						<div classes={css.field}>
							<label classes={css.label} for="phone">
								Phone Number
								<span classes={css.required} aria-hidden="true">
									*
								</span>
							</label>
							<input
								classes={css.input}
								id="phone"
								name="phone"
								type="tel"
								required
								autocomplete="tel"
							/>
						</div>
					</div>
					<div classes={css.row}>
						<div classes={css.field}>
							<label classes={css.label} for="email">
								Email
								<span classes={css.required} aria-hidden="true">
									*
								</span>
							</label>
							<input
								classes={css.input}
								id="email"
								name="email"
								type="email"
								required
								autocomplete="email"
							/>
						</div>
					</div>
					<div classes={css.row}>
						<div classes={css.field}>
							<label classes={css.label} for="how_can_we_help_">
								How can we help?
							</label>
							<textarea
								classes={css.textarea}
								id="how_can_we_help_"
								name="how_can_we_help_"
							/>
						</div>
					</div>
					<div classes={css.row}>
						<div classes={css.field}>
							<label for="newsletter_opt_in">
								<input
									type="checkbox"
									name="newsletter_opt_in"
									id="newsletter_opt_in"
								/>{' '}
								Let me know when SitePen shares info on Enterprise JavaScript!
							</label>
						</div>
					</div>
					<input type="submit" value="Submit" classes={css.submit} />
				</form>
				<div classes={css.trailing}>
					<h3>Address</h3>
					<address itemscope itemtype="http://schema.org/PostalAddress">
						<span itemprop="streetAddress">
							530 Lytton Avenue
							<br /> Second Floor
						</span>
						<br />
						<span itemprop="addressLocality">Palo Alto</span>,{' '}
						<span itemprop="addressRegion">CA</span>{' '}
						<span itemprop="postalCode">94301</span>
						<br />
						<a itemprop="telephone" href="tel:6509688787">
							650-968-8787
						</a>
					</address>
				</div>
			</div>
		</div>
	);
});

export default Contact;
