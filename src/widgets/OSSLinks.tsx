import { create, tsx } from '@dojo/framework/core/vdom';
import * as css from './OSSLinks.m.css';
import { Link } from '@dojo/framework/routing/Link';

const dojoLogo = require('../assets/images/oss/dojo.svg');
const internLogo = require('../assets/images/oss/intern.svg');
const tsLogo = require('../assets/images/oss/ts.svg');
const dojoToolkitLogo = require('../assets/images/oss/dojoToolkit.svg');
const dgridLogo = require('../assets/images/oss/dgrid.svg');

const factory = create();

export const OSSLinks = factory(function OSSLinks() {
	return (
		<div classes={css.root}>
			<h2 classes={css.heading}>Open Source Software Development</h2>
			<p classes={css.intro}>
				With over a decade of experience developing large-scale web applications, SitePen
				creates, maintains, and contributes to open source software that prioritizes the
				needs of enterprises and developers alike.
			</p>
			<ul classes={css.list}>
				<li>
					<Link to="opensource/dojo">
						<img src={dojoLogo} alt="Dojo" />
					</Link>
				</li>
				<li>
					<Link to="opensource/intern">
						<img src={internLogo} alt="intern" />
					</Link>
				</li>
				<li>
					<Link to="opensource/ts">
						<img src={tsLogo} alt="typescript" />
					</Link>
				</li>
				<li>
					<Link to="opensource/dojoToolkit">
						<img src={dojoToolkitLogo} alt="dojoToolkit" />
					</Link>
				</li>
				<li>
					<Link to="opensource/dgrid">
						<img src={dgridLogo} alt="dgrid" />
					</Link>
				</li>
			</ul>
		</div>
	);
});

export default OSSLinks;
