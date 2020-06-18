import { v } from '@dojo/framework/core/vdom';
const unified = require('unified');
const parse = require('rehype-parse');
const toH = require('hast-to-hyperscript');
const { selectAll } = require('hast-util-select');

let counter = 0;
const pragma = (tag: string, props: any = {}, children?: any[]) =>
	v(tag, { ...props, key: `key-${counter++}` }, children);
const pipeline = unified().use(parse);

export default function parseContent(content: string) {
	const nodes = pipeline.parse(content);
	const res = selectAll('meta, title', nodes);

	return res.map((node: any) => toH(pragma, node));
}
