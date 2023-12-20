

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.D7LbcbGa.js","_app/immutable/chunks/scheduler.5MydhT71.js","_app/immutable/chunks/index.zwtuVfDd.js","_app/immutable/chunks/singletons.dq8LuvZY.js"];
export const stylesheets = [];
export const fonts = [];
