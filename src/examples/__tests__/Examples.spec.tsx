import harness from '@dojo/framework/testing/harness';
import { tsx } from '@dojo/framework/core/vdom';
import block from '@dojo/framework/core/middleware/block';

import listBlock from '../list.block';
import FontAwesomeIcon from '../../icon/FontAwesomeIcon';
import Grid from '../../grid/Grid';
import Landing from '../../landing/Landing';
import LandingSubsection from '../../landing/LandingSubsection';
import LinkedCard from '../../card/LinkedCard';

import createBlockMock from '../../test/mockBlock';

import Examples from '../Examples';
import * as css from '../Examples.m.css';

describe('Examples', () => {
	it('renders', () => {
		const blockMock = createBlockMock([
			[
				listBlock,
				[
					{
						code: 'code',
						demo: 'demo',
						example: 'example',
						exampleName: 'name',
						overview: 'overview',
						sandbox: true
					}
				]
			]
		]);

		const h = harness(() => <Examples />, { middleware: [[block, blockMock]] });
		h.expect(() => (
			<Landing classes={{ 'dojo.io/Landing': { root: [css.root] } }}>
				<LandingSubsection>
					<h2>Examples</h2>
					<Grid>
						<div key="name" classes={css.card}>
							<LinkedCard
								classes={{ 'dojo.io/Card': { content: [css.cardContent] } }}
								footer={
									<div classes={css.footer}>
										<a
											href="https://codesandbox.io/s/github/dojo/examples/tree/master/name"
											target="_blank"
											classes={css.linkBtn}
										>
											<FontAwesomeIcon icon="laptop-code" />
										</a>
										<a
											href="https://github.com/dojo/examples/tree/master/name"
											target="_blank"
											classes={css.linkBtn}
										>
											<FontAwesomeIcon icon="code-branch" />
										</a>
									</div>
								}
								header={
									<div
										classes={css.header}
										styles={{
											backgroundImage:
												'url(https://github.com/dojo/examples/raw/master/name/preview.png)'
										}}
									/>
								}
								url="demo"
							>
								<h4 classes={css.title} />
							</LinkedCard>
						</div>
					</Grid>
				</LandingSubsection>
			</Landing>
		));
	});
});
