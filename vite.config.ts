import { sveltekit } from "@sveltejs/kit/vite";

import { defineConfig } from "vite";

import basicSsl from "@vitejs/plugin-basic-ssl";

export default defineConfig({

	plugins: [sveltekit(), basicSsl()],

	server: {
		fs: {
			strict: true,
			allow: ['../Content'], // add here relative path to your static dir
		},

		https: true,

	},

});