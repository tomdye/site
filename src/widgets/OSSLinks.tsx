import { create, tsx } from '@dojo/framework/core/vdom';
import * as css from './OSSLinks.m.css';
import * as commonCss from '../Common.m.css';
import { Link } from '@dojo/framework/routing/Link';

const dojoLogo = require('../assets/images/oss/dojo.png');
const internLogo = require('../assets/images/oss/intern.png');
const tsLogo = require('../assets/images/oss/ts.png');
const dojoToolkitLogo = require('../assets/images/oss/dojoToolkit.png');
const dgridLogo = require('../assets/images/oss/dgrid.png');

const factory = create();

export const OSSLinks = factory(function OSSLinks() {
	return (
		<div classes={css.root}>
			<h2 classes={[commonCss.heading, commonCss.centered]}>
				Open Source Software Development
			</h2>
			<p classes={css.intro}>
				With over a decade of experience developing large-scale web applications, SitePen
				creates, maintains, and contributes to open source software that prioritizes the
				needs of enterprises and developers alike.
			</p>
			<ul classes={css.list}>
				<li classes={css.item}>
					<Link to="opensourceDojo">
						<img loading="lazy" classes={css.img} src={dojoLogo} alt="Dojo" />
					</Link>
				</li>
				<li classes={css.item}>
					<Link to="opensourceIntern">
						<img loading="lazy" classes={css.img} src={internLogo} alt="intern" />
					</Link>
				</li>
				<li classes={css.item}>
					<Link to="opensourceTypescript">
						<img loading="lazy" classes={css.img} src={tsLogo} alt="typescript" />
					</Link>
				</li>
				<li classes={css.item}>
					<Link to="opensourceDojoToolkit">
						<img
							loading="lazy"
							classes={css.img}
							src={dojoToolkitLogo}
							alt="dojoToolkit"
						/>
					</Link>
				</li>
				<li classes={css.item}>
					<Link to="opensourceDgrid">
						<img loading="lazy" classes={css.img} src={dgridLogo} alt="dgrid" />
					</Link>
				</li>
			</ul>
		</div>
	);
});

export default OSSLinks;
