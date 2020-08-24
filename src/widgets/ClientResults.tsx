import { create, tsx } from '@dojo/framework/core/vdom';
import * as css from './ClientResults.m.css';
const fannieLogo = require('../assets/images/logos/fannie.svg');
const marriottLogo = require('../assets/images/logos/marriott.svg');
const builtLogo = require('../assets/images/logos/built.png');
const angularLogo = require('../assets/images/logos/angular.svg');
const dojoLogo = require('../assets/images/logos/dojo.svg');
const reactLogo = require('../assets/images/logos/react.svg');

export interface ClientResultsProperties {
	showBuiltWith?: boolean;
}

const factory = create().properties<ClientResultsProperties>();

export const ClientResults = factory(function ClientResults({ properties }) {
	const { showBuiltWith = true } = properties();
	return (
		<ul classes={css.list}>
			<li classes={css.item}>
				<div classes={css.clientLogoWrapper}>
					<img
						loading="lazy"
						classes={css.clientImg}
						src={fannieLogo}
						alt="FannieMae Logo"
					/>
				</div>
				<p>
					When Fannie Mae needed to launch a mission-critical trading platform with
					limited resources, they turned to us to provide leadership, design, development,
					and DevOps improvements.
				</p>
				{showBuiltWith && (
					<virtual>
						<p classes={css.builtWith}>built with</p>
						<img loading="lazy" src={angularLogo} alt="Angular Logo" />
					</virtual>
				)}
			</li>
			<li classes={css.item}>
				<div classes={css.clientLogoWrapper}>
					<img
						loading="lazy"
						classes={css.clientImg}
						src={marriottLogo}
						alt="Marriott Logo"
					/>
				</div>
				<p>
					When Marriott found themselves underperforming and bogged down with technical
					debt, we provided technical leadership, feature development, and mentoring to
					optimize application performance.
				</p>
				{showBuiltWith && (
					<virtual>
						<p classes={css.builtWith}>built with</p>
						<img loading="lazy" src={dojoLogo} alt="Dojo Logo" />
					</virtual>
				)}
			</li>
			<li classes={css.item}>
				<div classes={css.clientLogoWrapper}>
					<img loading="lazy" classes={css.clientImg} src={builtLogo} alt="Built Logo" />
				</div>
				<p>
					When Built lost their patience with an unstable legacy app, they partnered with
					us to stabilize the existing legacy application and develop a next-gen
					application at the same time.
				</p>
				{showBuiltWith && (
					<virtual>
						<p classes={css.builtWith}>built with</p>
						<img loading="lazy" src={reactLogo} alt="React Logo" />
					</virtual>
				)}
			</li>
		</ul>
	);
});

export default ClientResults;
