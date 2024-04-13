import * as server from '../entries/pages/teacher/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/teacher/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/teacher/+page.server.js";
export const imports = ["_app/immutable/nodes/4.4daab9f0.js","_app/immutable/chunks/scheduler.9f5ebd16.js","_app/immutable/chunks/index.ec56b59a.js","_app/immutable/chunks/cardSubject.9aa62ede.js"];
export const stylesheets = [];
export const fonts = [];
