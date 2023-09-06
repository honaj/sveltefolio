import { defineMDSveXConfig as defineConfig } from "mdsvex"
import path from 'node:path'
import {fileURLToPath} from 'node:url'

const dirname = path.resolve(fileURLToPath(import.meta.url), '../')

const config = defineConfig({
  extensions: [".svelte.md", ".md", ".svx"],
  layout: {
    default: path.join(dirname, './src/lib/components/layouts/default-layout.svelte')
  },
  smartypants: {
    dashes: "oldschool",
  },

  remarkPlugins: [],
  rehypePlugins: [],
});

export default config;
