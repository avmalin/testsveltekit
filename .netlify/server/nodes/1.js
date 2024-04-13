

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.8cea2984.js","_app/immutable/chunks/scheduler.9f5ebd16.js","_app/immutable/chunks/index.ec56b59a.js","_app/immutable/chunks/singletons.12525246.js"];
export const stylesheets = [];
export const fonts = [];
