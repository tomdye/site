import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { tsx } from '@dojo/framework/widget-core/tsx';
import { WidgetProperties } from '@dojo/framework/widget-core/interfaces';
import * as css from './Subsection.m.css';

export default class Subsection extends WidgetBase<WidgetProperties> {
	protected render() {
		return (
			<div classes={css.subsection}>{this.children}</div>
		);
	}
}
