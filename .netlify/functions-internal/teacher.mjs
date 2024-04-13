import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.07ca7f42.js","app":"_app/immutable/entry/app.26ce8184.js","imports":["_app/immutable/entry/start.07ca7f42.js","_app/immutable/chunks/scheduler.9f5ebd16.js","_app/immutable/chunks/singletons.12525246.js","_app/immutable/entry/app.26ce8184.js","_app/immutable/chunks/scheduler.9f5ebd16.js","_app/immutable/chunks/index.ec56b59a.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/4.js'))
		],
		routes: [
			{
				id: "/teacher",
				pattern: /^\/teacher\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})());
