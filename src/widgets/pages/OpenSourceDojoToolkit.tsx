import { create, tsx } from '@dojo/framework/core/vdom';
import { Hero } from '../Hero';
import * as css from './OpenSource.m.css';
import * as commonCss from '../../Common.m.css';
import { ConnectStrip } from '../ConnectStrip';
import OSSLinks from '../OSSLinks';

const factory = create();

export const OpenSourceDojoToolkit = factory(function OpenSourceDojoToolkit() {
	return (
		<div classes={css.root}>
			<div classes={[css.heroWrapper, css.dojoToolkitHeroWrapper]}>
				<div classes={commonCss.contentWrapper}>
					<Hero>
						{{
							title: 'open source',
							xlTitle: 'dojo framework'
						}}
					</Hero>
				</div>
			</div>
			<div classes={commonCss.smallerContentWrapper}>
				<p>
					SitePen was a significant contributor to the creation of the{' '}
					<a href="https://www.dojotoolkit.org/" taget="_blank" rel="noopener">
						Dojo Toolkit
					</a>
					, the first open source JavaScript library for engineering large-scale web
					applications.
				</p>
				<p>
					In the early years, our team was working with many Fortune 500 companies who
					were attempting to migrate decades-old legacy systems to the internet and
					JavaScript was not the common choice for building these complex apps. When it
					was being used, the same components were being rewritten from scratch in
					unstandardized JavaScript, over and over again so rather than duplicating effort
					with every new application, developer advocates and companies came together to
					build a powerful JavaScript toolkit that would help to catapult the language
					into what it has become today.
				</p>
				<p>
					Helping to create the Dojo Toolkit was our first foray into applying our
					knowledge and expertise into solving early problems of the Enterprise and what
					would become a long history of establishing, maintaining and validating the
					usefulness, efficiency and necessity of open source software.
				</p>
				<ul classes={css.list}>
					<li classes={css.item}>
						<b>Enterprise JavaScript</b> – As early contributors to the Dojo Toolkit, we
						led the charge on understanding and addressing the constraints of complex
						web and enterprise applications. From internationalization and accessibility
						to data grids and charts to performance and security, our shared priority
						was building a robust foundation to meet the needs of the enterprise at
						every turn and ensuring our customers were adhering to best practices and
						standards of the day.
					</li>
					<li classes={css.item}>
						<b>Efficiencies of Scale</b> – No longer captives of proprietary software,
						the Dojo Toolkit brought together teams from around the world to capitalize
						on the shared development efforts via open source software, participating in
						the journey of JavaScript becoming the world’s most used programming
						language, helping companies benefit not only from the engineers they
						employed but from engineers at powerhouses like IBM, Mozilla and others who
						standardized and shared code to the open source ecosystem.
					</li>
					<li classes={css.item}>
						<b>Provide Developer Ergonomics</b> – Dojo aligns with modern standards and
						patterns without the cognitive overload of every design decision. For
						example, Dojo currently leverages webpack for various build optimizations,
						but most applications built with Dojo will never need to think about webpack
						configuration as Dojo does the right thing based on the application
						architecture. Dojo provides efficient tooling for creating and testing
						applications and UI widgets, type safety and accuracy via efficient
						TypeScript ergonomics, and much more.
					</li>
					<li classes={css.item}>
						<b>InnerSource</b> – The broad acceptance of open source software
						demonstrated that distributed teams could effectively and efficiently
						collaborate across space and time, laying waste to the idea that developers
						needed to be side-by-side in cubicles to complete projects. From this
						sprouted the idea of shared repositories, codebases and methodologies across
						multiple, internal teams. Our work continues with our customers today in
						helping large companies InnerSource their code and instill the open source
						methodologies that enable effective and engaged teams.
					</li>
				</ul>
				<p>
					Since its inception more than 15 years ago, the SitePen team has made
					substantial contributions to the Dojo Toolkit; providing the stewardship
					required to ensure the stability, maintenance and quality of the as part of the
					JavaScript ecosystem.
				</p>
			</div>
			<div classes={commonCss.contentWrapper}>
				<OSSLinks />
			</div>
			<ConnectStrip />
		</div>
	);
});

export default OpenSourceDojoToolkit;
