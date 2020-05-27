import { create, tsx } from '@dojo/framework/core/vdom';
import * as css from './Summary.m.css';
import { RenderResult } from '@dojo/framework/core/interfaces';

export interface SummaryProperties {
	reverse?: boolean;
}

export interface SummaryChildren {
	image: RenderResult;
	blurb: RenderResult;
	title: RenderResult;
}

const factory = create().properties<SummaryProperties>().children<SummaryChildren>();

export const Summary = factory(function Summary({ children, properties }) {
	const [{ title, image, blurb }] = children();
	const { reverse } = properties();

	return (
		<div classes={[css.root, reverse && css.reverse]}>
			<div classes={css.leading}>{image}</div>
			<div classes={css.trailing}>
				<h2 classes={css.title}>{title}</h2>
				<p classes={css.blurb}>{blurb}</p>
			</div>
		</div>
	);
});

export default Summary;
