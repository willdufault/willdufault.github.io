export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","css/style.css","favicon.png","images/24ours-screenshot.png","images/beecology-screenshot.png","images/bjs-logo.png","images/bulma-logo.png","images/chess-with-ai-screenshot.png","images/connect-four-with-smart-bot-screenshot.png","images/customizable-fullscreen-clock-screenshot.png","images/fractal-playground-screenshot.png","images/goatcalendar-screenshot.png","images/home-depot-logo.png","images/immigration4iran-screenshot.png","images/interactive-data-structure-visualizer-screenshot.png","images/linkedin-pfp-2.png","images/nfl-combine-draft-predictor-screenshot.png","images/punchender-code-screenshot.png","images/punchender-mockup-screenshot.png","images/student-performance-predictor-screenshot.png","images/svelte-logo-inverted.png","images/svelte-logo.png","images/wpi-seal.png","sass/style.scss"]),
	mimeTypes: {".css":"text/css",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.t-9cxtUy.js","app":"_app/immutable/entry/app.g6pHkE9Z.js","imports":["_app/immutable/entry/start.t-9cxtUy.js","_app/immutable/chunks/scheduler.5MydhT71.js","_app/immutable/chunks/singletons.dq8LuvZY.js","_app/immutable/entry/app.g6pHkE9Z.js","_app/immutable/chunks/scheduler.5MydhT71.js","_app/immutable/chunks/index.zwtuVfDd.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
