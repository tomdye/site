import { create, tsx } from '@dojo/framework/core/vdom';
import * as css from './BlogConnect.m.css';
import { Summary } from './Summary';
const ctaImg = require('../assets/images/services/management.jpg');
import blogConnectConfig from '../blogConnectConfig';
import { ConnectSessionButton } from './ConnectSessionButton';

export interface BlogConnectProperties {
	slug: string;
}

const factory = create().properties<BlogConnectProperties>();

const titles = {
	dojo: 'Trying to get the most out of your legacy web app in the modern era?',
	testing: 'Interested in improving your approach to testing?',
	typescript: 'Is it time to asess if your team should be using TypeScript?',
	process: 'Wondering where you can reap these benefits in your development organization?',
	architecture: 'Have questions about your existing architecture or ready to vet a new project?',
	generic: 'Learn more about how SitePen can be your partner.'
};

const blurbs = {
	dojo: (
		<p>
			If you’d like to talk to us about how to extend or more easily maintain your legacy Dojo
			Toolkit application, we’d love to hear from you. Connect with us today for a{' '}
			<b>free strategy session</b> with our expert Dojo and TypeScript engineers.
		</p>
	),
	testing: (
		<p>
			Connect with us for a <b>free technical session</b> on how to plan and implement a solid
			testing strategy today! Your users, developers and bottom line will thank you.
		</p>
	),
	typescript: (
		<p>
			Connect with us for a <b>free technical assessment</b> and ask the experts whether
			TypeScript is the right choice for your application.
		</p>
	),
	process: (
		<p>
			Even healthy, mature teams know there's always room for improvement. We'd be happy to
			review one or more of your current approaches in a <b>complimentary strategy session</b>{' '}
			with our technical leadership team.
		</p>
	),
	architecture: (
		<p>
			Receive a <b>complimentary strategy session</b> with our expert architecture team to
			gain objective perspectives and increase the probability of building a quality
			applicaiton, the right way - the first time.
		</p>
	),
	generic: (
		<p>
			We are committed to achieving technical objectives, solving critical business problems
			and can put you on the right path to building applications the right way the first time.
			Schedule a <b>free strategy session</b> with our technical leadership team to learn
			more.
		</p>
	)
};

export const BlogConnect = factory(function BlogConnect({ properties }) {
	const { slug } = properties();
	const type = blogConnectConfig[slug] || 'generic';

	return (
		<Summary smaller reverse>
			{{
				title: <span classes={css.title}>{titles[type as keyof typeof titles]}</span>,
				blurb: (
					<virtual>
						{blurbs[type as keyof typeof titles]}
						<div classes={css.buttonWrapper}>
							<ConnectSessionButton slug={slug} />
						</div>
					</virtual>
				),
				image: (
					<img
						classes={css.ctaImage}
						loading="lazy"
						src={ctaImg}
						alt="Illustration for call to action"
					/>
				)
			}}
		</Summary>
	);
});

export default BlogConnect;
