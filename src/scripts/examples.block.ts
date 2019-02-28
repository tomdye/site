import 'isomorphic-fetch';
import { VNode } from '@dojo/framework/widget-core/interfaces';
import { fromMarkdown } from './compile';

const README_URL = "https://raw.githubusercontent.com/dojo/examples/master/README.md";

export interface MNode {
    children: MNode[],
    originalProperties: {[key: string]: string},
    properties: {[key: string]: string},
    tag?: string,
    type: string
}

export interface ExampleMeta {
    code: VNode,
    demo: VNode,
    example: VNode,
    exampleName: string,
    overview: VNode
}

export default async function(): Promise<ExampleMeta[]> {
    const response = await fetch(README_URL);
    const text = await response.text();

    const rows = text.match(/\|.*\|/g)!.map(row => row.trim());
    const keys = rows.shift()!.split('|').map(value => value.toLowerCase().trim()).filter(value => value);
    rows.shift();
    const examples = rows.map(row => {
        const data = row.split('|').map(value => value.trim()).filter(value => value);
        return {
            [keys[0]]: fromMarkdown(data[0], {}),
            [keys[1]]: fromMarkdown(data[1], {}),
            [keys[2]]: fromMarkdown(data[2], {}),
            [keys[3]]: fromMarkdown(data[3], {}),
            exampleName: data[1].replace(/((^\[Link\]\(\.\/)|(\)$))/g, '')
        };
    });
    return examples as any as ExampleMeta[];
}
