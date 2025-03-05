import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import rehypePrettyCode from 'rehype-pretty-code'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), mdx({
    rehypePlugins: [rehypeKatex, [rehypePrettyCode, {
      theme: 'github-dark'
    }]],
    remarkPlugins: [remarkMath],
  }),],
})
