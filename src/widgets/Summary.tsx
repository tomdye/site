import { create, tsx } from '@dojo/framework/core/vdom';
import * as css from './Summary.m.css';
import { RenderResult } from '@dojo/framework/core/interfaces';

export interface SummaryProperties {
	reverse?: boolean;
	smaller?: boolean;
	trailingBias?: boolean;
}

export interface SummaryChildren {
	image: RenderResult;
	blurb: RenderResult;
	title: RenderResult;
}

const factory = create().properties<SummaryProperties>().children<SummaryChildren>();

export const Summary = factory(function Summary({ children, properties }) {
	const [{ title, image, blurb }] = children();
	const { reverse, smaller, trailingBias } = properties();

	const titleNode = smaller ? (
		<h3 classes={css.title3}>{title}</h3>
	) : (
		<h2 classes={css.title2}>{title}</h2>
	);

	return (
		<div classes={[css.root, reverse && css.reverse, trailingBias && css.trailingBias]}>
			<div classes={css.leading}>{image}</div>
			<div classes={css.trailing}>
				{titleNode}
				<div classes={css.blurb}>{blurb}</div>
			</div>
		</div>
	);
});

export default Summary;
