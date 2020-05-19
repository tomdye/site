import Registry from '@dojo/framework/core/Registry';
import renderer, { tsx } from '@dojo/framework/core/vdom';
import { StateHistory } from '@dojo/framework/routing/history/StateHistory';
import { registerRouterInjector } from '@dojo/framework/routing/RouterInjector';

import { App } from './App';
import routes from './routes';

const registry = new Registry();
registerRouterInjector(routes, registry, { HistoryManager: StateHistory });

const r = renderer(() => <App />);
r.mount({ domNode: document.getElementById('app'), registry });
