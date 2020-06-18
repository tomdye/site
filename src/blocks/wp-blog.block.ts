import fetch from '../util/fetch';
import { JSDOM } from 'jsdom';
import { highlightAllUnder } from 'prismjs';
import { WpBlogPreview } from './wp-blog-previews.block';
require('prismjs/components/prism-clike');
require('prismjs/components/prism-javascript');
require('prismjs/components/prism-jsx');
require('prismjs/components/prism-typescript');
require('prismjs/components/prism-tsx');

export interface Blog {
	id: string;
	title: string;
	slug: string;
	image: string;
	content: string;
	author: string;
	date: string;
	categories: number[];
	link: string;
	meta: string;
}

const mapping = {
	jscript: 'js'
};

interface WpBlog extends WpBlogPreview {
	content: {
		rendered: string;
	};
	categories: number[];
	link: string;
	yoast_head: string;
}

function processCodeBlocks(content: string) {
	const dom = new JSDOM(`<!DOCTYPE html><div id='wrapper'></div>`);
	const doc = dom.window.document;
	const wrapper = doc.getElementById('wrapper');

	if (wrapper) {
		wrapper.innerHTML = content;

		const allPre = doc.querySelectorAll('pre');

		Array.from(allPre)
			.filter((pre) => pre.classList.contains('brush:'))
			.forEach((pre) => {
				const preClasses = pre.className;
				const codeNode = doc.createElement('code');
				codeNode.innerHTML = pre.innerHTML;

				let language = preClasses.replace('brush: ', '').replace(';', '').split(' ')[0];

				if (mapping.hasOwnProperty(language)) {
					language = (mapping as any)[language];
				}

				codeNode.classList.add(`language-${language}`);
				pre.className = '';
				pre.innerHTML = codeNode.outerHTML;
			});

		highlightAllUnder(wrapper, false);

		return wrapper.innerHTML;
	} else {
		throw Error('prism conversion failed');
	}
}

export default async function (baseUrl: string, slug: string): Promise<Blog | undefined> {
	const response = await fetch(
		`${baseUrl}/wp-json/wp/v2/posts?slug=${slug}&_embed=wp:featuredmedia,author`
	);
	const [blog]: WpBlog[] = await response.json();
	if (!blog) {
		return undefined;
	}
	const [media] = (blog?._embedded && blog?._embedded['wp:featuredmedia']) || [];
	const image = media?.media_details?.sizes?.large?.source_url || blog.jetpack_featured_media_url;

	return {
		title: blog.title.rendered,
		slug: blog.slug,
		id: blog.id,
		image,
		content: processCodeBlocks(blog.content.rendered),
		author: blog?._embedded.author[0].name || 'Unknown',
		date: blog.date,
		categories: blog.categories,
		link: blog.link,
		meta: blog.yoast_head
	};
}
