import { create, tsx } from '@dojo/framework/core/vdom';
import { Hero } from '../Hero';
import * as css from './Contact.m.css';
import * as commonCss from '../../Common.m.css';
import icache from '@dojo/framework/core/middleware/icache';

const factory = create({ icache });

export const Contact = factory(function Contact({ middleware: { icache } }) {
	const submitError = icache.getOrSet('submitError', false);

	return (
		<div classes={css.root}>
			<head>
				<title>Contact Us | SitePen</title>
				<meta
					name="description"
					content="With offices throughout the US and UK, we’re available to to chat at your convenience. Call us at 650-968-8787 or drop us a note to hello@sitepen.com."
				/>
				<meta name="robots" content="index, follow" />
				<meta
					name="googlebot"
					content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
				/>
				<meta
					name="bingbot"
					content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
				/>
				<link rel="canonical" href="https://www.sitepen.com/contact/" />
				<meta property="og:locale" content="en_US" />
				<meta property="og:type" content="article" />
				<meta property="og:title" content="Contact Us | SitePen" />
				<meta
					property="og:description"
					content="With offices throughout the US and UK, we’re available to to chat at your convenience. Call us at 650-968-8787 or drop us a note to hello@sitepen.com."
				/>
				<meta property="og:url" content="https://www.sitepen.com/contact/" />
				<meta property="og:site_name" content="SitePen" />
				<meta property="article:publisher" content="https://www.facebook.com/SitePen" />
				<meta
					property="og:image"
					content="https://wp.sitepen.com/wp-content/uploads/2020/01/favicon.png"
				/>
				<meta property="og:image:width" content="512" />
				<meta property="og:image:height" content="512" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:creator" content="@SitePen" />
				<meta name="twitter:site" content="@SitePen" />
			</head>
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
					classes={css.leading}
					onsubmit={(event: Event) => {
						event.stopPropagation();
						event.preventDefault();
						icache.set('submitError', false);

						const url =
							'https://api.hsforms.com/submissions/v3/integration/submit/2059467/2e1a1b5b-27bb-447d-aac4-0b87c1e88fec';
						const form = event.target as HTMLFormElement;

						if (form['_gotcha'].value) {
							return false;
						}

						const { elements } = form;
						const fields: { name: string; value: string }[] = [];
						for (let i = 0; i < elements.length; i++) {
							const field = elements[i] as HTMLInputElement;
							if (field.name && field.name !== '_gotcha') {
								fields.push({
									name: field.name,
									value: field.value
								});
							}
						}
						fetch(url, {
							method: 'post',
							mode: 'cors',
							headers: {
								'Content-Type': 'application/json'
							},
							body: JSON.stringify({
								submittedAt: Date.now(),
								context: {
									pageUri: 'www.sitepen.com/contact',
									pageName: 'Sitepen Website Contact Form'
								},
								fields
							})
						})
							.then((response) => {
								if (response && response.ok) {
									window.location.href = '/contact-thank-you';
								} else {
									icache.set('submitError', true);
								}
							})
							.catch(() => {
								icache.set('submitError', true);
							});
					}}
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
						<label tabindex="-1" aria-hidden classes={css.gotcha}>
							gotcha label
							<input
								tabindex="-1"
								aria-hidden
								id="_gotcha"
								name="_gotcha"
								type="text"
								autocomplete="off"
							/>
						</label>
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
								minLength="7"
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
					{submitError && (
						<p classes={css.error}>
							Something went wrong with your form submission. Please try again
						</p>
					)}
				</form>
				<div classes={css.trailing}>
					<h3 classes={css.addressHeading}>Address</h3>
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
