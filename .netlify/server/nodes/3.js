import * as server from '../entries/pages/student/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/student/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/student/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.59ba34a8.js","_app/immutable/chunks/scheduler.9f5ebd16.js","_app/immutable/chunks/index.ec56b59a.js","_app/immutable/chunks/cardSubject.9aa62ede.js","_app/immutable/chunks/spread.8a54911c.js"];
export const stylesheets = [];
export const fonts = [];
