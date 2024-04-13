

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.c95beed3.js","_app/immutable/chunks/scheduler.9f5ebd16.js","_app/immutable/chunks/index.ec56b59a.js","_app/immutable/chunks/cardSubject.9aa62ede.js","_app/immutable/chunks/spread.8a54911c.js"];
export const stylesheets = [];
export const fonts = [];
