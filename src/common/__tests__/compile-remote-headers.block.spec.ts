import { v } from '@dojo/framework/core/vdom';
import * as fetch from 'node-fetch';

import compileRemoteHeadersBlock, { SupplementalPageLookup } from '../compile-remote-headers.block';

const mockReadme = `
Top content

# Page 1

Some content for page 1

# Page 2

Some content for page 2

[A link!](https://example.com)

# Page 3: A complicated name!

Even more content.

This time for page 3!

# Test \`Test Code\`

Test page
`;

const expectedOutput: SupplementalPageLookup = {
	'page-1': v('div', {}, [
		v('h1', { key: 'compiled-4' }, ['Page 1']),
		`
`,
		v('p', { key: 'compiled-5' }, ['Some content for page 1']),
		`
`
	]),
	'page-2': v('div', {}, [
		v('h1', { key: 'compiled-6' }, ['Page 2']),
		`
`,
		v('p', { key: 'compiled-7' }, ['Some content for page 2']),
		`
`,
		v('p', { key: 'compiled-9' }, [
			v('a', { key: 'compiled-8', href: 'https://example.com', target: '_blank' }, ['A link!'])
		]),
		`
`
	]),
	'page-3-a-complicated-name': v('div', {}, [
		v('h1', { key: 'compiled-10' }, ['Page 3: A complicated name!']),
		`
`,
		v('p', { key: 'compiled-11' }, ['Even more content.']),
		`
`,
		v('p', { key: 'compiled-12' }, ['This time for page 3!']),
		`
`
	]),
	'test-test-code': v('div', {}, [
		v('h1', { key: 'compiled-14' }, ['Test ', v('code', { key: 'compiled-13' }, ['Test Code'])]),
		`
`,
		v('p', { key: 'compiled-15' }, ['Test page'])
	])
};

const expectedHeaderOnlyOutput = [
	{
		title: 'Page 1',
		param: 'page-1'
	},
	{
		title: 'Page 2',
		param: 'page-2'
	},
	{
		title: 'Page 3: A complicated name!',
		param: 'page-3-a-complicated-name'
	},
	{
		title: 'Test Test Code',
		param: 'test-test-code'
	}
];

describe('compile remote headers block', () => {
	const mockFetch = jest.spyOn(fetch, 'default');
	const mockText = jest.fn();

	beforeEach(() => {
		jest.resetAllMocks();

		mockFetch.mockResolvedValue({
			text: mockText
		} as any);
		mockText.mockResolvedValue(Promise.resolve(mockReadme));
	});

	it('should return pages lookup', async () => {
		const result = await compileRemoteHeadersBlock({
			repo: 'dojo/framework',
			branch: undefined,
			path: 'path/to/supplemental.md',
			locale: 'en'
		});

		expect(result).toEqual(expectedOutput);
	});

	it('should return list of headers', async () => {
		const result = await compileRemoteHeadersBlock({
			repo: 'dojo/framework',
			branch: undefined,
			path: 'path/to/supplemental.md',
			locale: 'en',
			headersOnly: true
		});

		expect(result).toEqual(expectedHeaderOnlyOutput);
	});

	it('should return empty lookup table if no content', async () => {
		mockText.mockResolvedValue(Promise.resolve(v('div', {}, [])));

		const result = await compileRemoteHeadersBlock({
			repo: 'dojo/framework',
			branch: undefined,
			path: 'path/to/supplemental.md',
			locale: 'en'
		});

		expect(result).toEqual({});
	});
});
