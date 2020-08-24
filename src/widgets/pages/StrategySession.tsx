import { create, tsx } from '@dojo/framework/core/vdom';
import * as css from './StrategySession.m.css';
import * as commonCss from '../../Common.m.css';
import icache from '@dojo/framework/core/middleware/icache';
import ClientResults from '../ClientResults';
const checkIcon = require('../../assets/images/icons/check.svg');

export interface StrategySessionProperties {
	slug?: string;
}

const factory = create({ icache }).properties<StrategySessionProperties>();

export const StrategySession = factory(function StrategySession({
	middleware: { icache },
	properties
}) {
	const submitError = icache.getOrSet('submitError', false);
	const { slug } = properties();

	return (
		<div classes={css.root}>
			<head>
				<title>Schedule a Strategy Session | SitePen</title>
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
				<link rel="canonical" href="https://www.sitepen.com/strategy-session/" />
				<meta property="og:locale" content="en_US" />
				<meta property="og:type" content="article" />
				<meta property="og:title" content="Schedule a Strategy Session | SitePen" />
				<meta
					property="og:description"
					content="With offices throughout the US and UK, we’re available to to chat at your convenience. Call us at 650-968-8787 or drop us a note to hello@sitepen.com."
				/>
				<meta property="og:url" content="https://www.sitepen.com/strategy-session/" />
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
				<div classes={[css.hero, commonCss.contentWrapper]}>
					<h1 classes={css.heroTitle}>LET'S TALK STRATEGY</h1>
				</div>
			</div>
			<div classes={[commonCss.contentWrapper, css.content]}>
				<div classes={css.top}>
					<div classes={css.leading}>
						<h2 classes={css.subHeading}>
							<b>Connect with one of our engineering leaders</b>
							<br /> for a directed discussion to satisfy your current objectives.
							Potential topics may include:
						</h2>
						<ul classes={css.iconList}>
							<li classes={css.item}>
								<img classes={css.img} src={checkIcon} alt="elevate icon" />
								Architecture and tech stack decisions
							</li>
							<li classes={css.item}>
								<img classes={css.img} src={checkIcon} alt="guide icon" />
								Your development goals & challenges
							</li>
							<li classes={css.item}>
								<img classes={css.img} src={checkIcon} alt="communication icon" />
								Approach to modernize your legacy application
							</li>
							<li classes={css.item}>
								<img
									loading="lazy"
									classes={css.img}
									src={checkIcon}
									alt="knowledge icon"
								/>
								Guidance on implementing automated testing
							</li>
						</ul>
					</div>
					<form
						classes={[css.trailing, css.form]}
						onsubmit={(event: Event) => {
							event.stopPropagation();
							event.preventDefault();
							icache.set('submitError', false);

							const url =
								'https://api.hsforms.com/submissions/v3/integration/submit/2059467/8a70b732-4d8b-48bf-90d1-e6d2ba0501fe';
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
										pageUri: slug
											? `www.sitepen.com/blog/${slug}`
											: 'www.sitepen.com/strategy-session',
										pageName: `Sitepen Website Strategy Session - ${slug}`
									},
									fields
								})
							})
								.then(async (response) => {
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
						<h1 classes={css.formTitle}>Schedule a Strategy Session</h1>
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
								<label classes={css.label} for="what_is_your_role_">
									What is your role?
									<span classes={css.required} aria-hidden="true">
										*
									</span>
								</label>
								<select
									required
									classes={css.input}
									id="what_is_your_role_"
									name="what_is_your_role_"
								>
									<option value="">Please Select</option>
									<option value="Technical Lead">Technical Lead</option>
									<option value="Team Developer">Team Developer</option>
									<option value="Project Manager">Project Manager</option>
									<option value="Director, VP, C-Level">
										Director, VP, C-Level
									</option>
									<option value="Vendor Relations">Vendor Relations</option>
									<option value="Other">Other</option>
								</select>
							</div>
						</div>
						<div classes={css.row}>
							<div classes={css.field}>
								<label classes={css.label} for="how_would_you_like_to_help_">
									How can we help?
									<span classes={css.required} aria-hidden="true">
										*
									</span>
								</label>
								<textarea
									required
									classes={css.textarea}
									id="how_would_you_like_to_help_"
									name="how_would_you_like_to_help_"
								/>
							</div>
						</div>
						<input type="submit" value="Lets talk" classes={css.submit} />
						{submitError && (
							<p classes={css.error}>
								Something went wrong with your form submission. Please try again
							</p>
						)}
					</form>
				</div>

				<ClientResults showBuiltWith={false} />
			</div>
		</div>
	);
});

export default StrategySession;
