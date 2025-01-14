import harness from '@dojo/framework/testing/harness';
import { tsx } from '@dojo/framework/core/vdom';
import assertionTemplate from '@dojo/framework/testing/assertionTemplate';

import TutorialsLanding from '../TutorialsLanding';
import Landing from '../../landing/Landing';
import LandingSubsection from '../../landing/LandingSubsection';
import Grid from '../../grid/Grid';
import LandingLink from '../../landing/LandingLink';

import bundle from '../TutorialsLanding.nls';

describe('TutorialsLanding', () => {
	const messages = bundle.messages;

	const baseAssertion = assertionTemplate(() => (
		<Landing key="tutorials-landing">
			<LandingSubsection title={messages.gettingStarted}>
				<Grid>
					<LandingLink
						title={messages.localInstllation}
						icon="cloud-download-alt"
						to="tutorial-local-installation"
					>
						{messages.localInstllationDescription}
					</LandingLink>
					<LandingLink
						title={messages.sampleTutorial}
						icon="graduation-cap"
						color="orange"
						to="tutorial-sample-tutorial"
					>
						{messages.sampleTutorialDescription}
					</LandingLink>
				</Grid>
			</LandingSubsection>
			<LandingSubsection title={messages.advanced}>
				<Grid>
					<LandingLink
						title={messages.anotherTutorial}
						icon="list-alt"
						color="purple"
						to="tutorial-another-tutorial"
					>
						{messages.anotherTutorialDescription}
					</LandingLink>
				</Grid>
			</LandingSubsection>
		</Landing>
	));

	it('renders', () => {
		const h = harness(() => <TutorialsLanding />);

		h.expect(baseAssertion);
	});
});
