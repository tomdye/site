import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import watch from '@dojo/framework/widget-core/decorators/watch';
import Block from '@dojo/framework/widget-core/meta/Block';
import { tsx } from '@dojo/framework/widget-core/tsx';

// import CardIconHeader from '../widgets/card/CardIconHeader';
import FontAwesomeIcon from '../widgets/icon/FontAwesomeIcon';
import Grid from '../widgets/grid/Grid';
import Landing from '../widgets/Landing';
import LinkedCard from '../widgets/card/LinkedCard';
import Subsection from '../widgets/section/Subsection';
import getExamples, { ExampleMeta } from '../scripts/examples.block';

import * as css from "./Examples.m.css";

export default class Examples extends WidgetBase {
	@watch()
	private hoveredExampleName?: string;

	private getScreenshotURL(name: string) {
		return `
			${this.hoveredExampleName !== name ? 'linear-gradient(rgba(0,0,0,0.075), rgba(0,0,0,0.075)),' : ''}
			url(https://github.com/dojo/examples/raw/master/${name}/preview.png)
		`;
	}

	protected render() {
		const examples = this.meta(Block).run(getExamples)() as any as ExampleMeta[];
		return (
			<Landing>
				<Subsection>
					<h2>Examples</h2>
					<Grid>
						{examples.map(example => {
							const baseURL = `dojo/examples/tree/master/${example.exampleName}`;
							return (
								<div
									key={example.exampleName}
									classes={css.card}
									onmouseover={() => { this.hoveredExampleName = example.exampleName; }}
									onmouseout={() => { this.hoveredExampleName = ''; }}
								>
									<LinkedCard
										header={(
											<div
												classes={css.header}
												styles={{ backgroundImage: this.getScreenshotURL(example.exampleName) }} />
										)}
										footer={(
											<div classes={css.footer}>
												{example.codesandbox && (
													<a href={`https://codesandbox.io/s/github/${baseURL}`} classes={css.linkBtn}>
														<FontAwesomeIcon icon="plug" />
													</a>
												)}
												<a href={`https://github.com/${baseURL}`} classes={css.linkBtn}>
													<FontAwesomeIcon icon="code-branch" />
												</a>
											</div>
										)}
										url={`http://dojo.github.io/examples/${example.exampleName}/`}
									>
										<h4 classes={css.title}>{example.example.children}</h4>
										{example.overview.children}
									</LinkedCard>
								</div>
							);
						})}
					</Grid>
				</Subsection>
			</Landing>
		);
	}
}
