import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import Block from '@dojo/framework/widget-core/meta/Block';
import { tsx } from '@dojo/framework/widget-core/tsx';

// import CardIconHeader from '../widgets/card/CardIconHeader';
import Grid from '../widgets/grid/Grid';
import Landing from '../widgets/Landing';
import LinkedCard from '../widgets/card/LinkedCard';
import Subsection from '../widgets/section/Subsection';
import getExamples, { ExampleMeta } from '../scripts/examples.block';

import * as css from "./Examples.m.css";

export default class Examples extends WidgetBase {
	
	protected render() {
		const examples = this.meta(Block).run(getExamples)() as any as ExampleMeta[];
		console.log(examples);
		return (
			<Landing>
				<Subsection>
					<h2>Examples</h2>
					<Grid>
						{examples.map(example => (
							<div key={example.exampleName} classes={css.card}>
								<LinkedCard
									header={(
										<div classes={css.header} styles={{backgroundImage: `url(https://github.com/dojo/examples/raw/master/${example.exampleName}/preview.png)`}} />
									)}
									url={`http://dojo.github.io/examples/${example.exampleName}/`}
								>
									<h4 classes={css.title}>{example.example}</h4>
									{example.overview}
								</LinkedCard>
							</div>
						))}
					</Grid>
				</Subsection>
			</Landing>
		);
	}
}
