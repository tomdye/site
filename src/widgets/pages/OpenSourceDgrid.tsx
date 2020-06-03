import { create, tsx } from '@dojo/framework/core/vdom';
import { Hero } from '../Hero';
import * as css from './OpenSource.m.css';
import * as commonCss from '../../Common.m.css';
import { ConnectStrip } from '../ConnectStrip';
import OSSLinks from '../OSSLinks';

const factory = create();

export const OpenSourceDgrid = factory(function OpenSourceDgrid() {
	return (
		<div classes={css.root}>
			<div classes={[css.heroWrapper, css.dgridHeroWrapper]}>
				<div classes={commonCss.contentWrapper}>
					<Hero>
						{{
							title: 'open source',
							xlTitle: 'dgrid'
						}}
					</Hero>
				</div>
			</div>
			<div classes={commonCss.smallerContentWrapper}>
				<p>
					Data grids are a common need for representing data in enterprise applications.
					Grids are challenging as browsers do not provide sufficient built-in APIs to
					reflect the wide variety of features needed by enterprises.
				</p>
				<p>
					Prior to{' '}
					<a href="https://dgrid.io/" target="_blank" rel="noopener">
						dgrid
					</a>
					, most data grid solutions either struggled immensely with performance issues
					due to a kitchen sink approach, or were incredibly limited in their
					capabilities. dgrid was the first grid component to provide both flexibility and
					efficient performance.
				</p>
				<p>
					dgrid provides a flexible architecture for including data grid features
					incrementally, optimizing performance for only the features needed. From
					lazy-loading very large data sets to powerful features for configuring and
					controlling grid behavior, dgrid offers a powerful data grid component and
					though built over 10 years ago, is still maintained and in heavy use today.
				</p>
			</div>
			<div classes={commonCss.contentWrapper}>
				<OSSLinks />
			</div>
			<ConnectStrip />
		</div>
	);
});

export default OpenSourceDgrid;
