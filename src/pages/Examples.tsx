import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import Block from '@dojo/framework/widget-core/meta/Block';
import { tsx } from '@dojo/framework/widget-core/tsx';

import CardIconHeader from '../widgets/card/CardIconHeader';
import Grid from '../widgets/grid/Grid';
import Landing from '../widgets/Landing';
import LinkedCard from '../widgets/card/LinkedCard';
import Subsection from '../widgets/section/Subsection';
import getExamples, { ExampleMeta } from '../scripts/examples.block';

import * as css from "./Examples.m.css";

export default class Examples extends WidgetBase {
	
	protected render() {
		const examples = this.meta(Block).run(getExamples)() as any as ExampleMeta[];
		return (
			<Landing>
				<Subsection>
					<h2>Examples</h2>
					<Grid>
						{examples.map(example => (
							<div key={example.Example} classes={css.card}>
								<LinkedCard
									header={<CardIconHeader icon="apple-alt" background="blue" />}
									// outlet={`${example.Example}-page`}
									// params={{ page: example.Demo }}
								>
									<h4 classes={css.title}>{example.Example}</h4>
									{example.Overview}
								</LinkedCard>
							</div>
						))}
					</Grid>
				</Subsection>
			</Landing>
		);
	}
}
