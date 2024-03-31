import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	css:{
		preprocessorOptions:{
		  postcss:{
			configFilePath:'./postcss.config.js',
		  },
		},
	},
	
});
