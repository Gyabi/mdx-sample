// import React from 'react'
import ReactDOM from 'react-dom/client'
import { MDXProvider } from '@mdx-js/react'
import Root from './root.mdx'
import 'zenn-content-css';
import 'katex/dist/katex.min.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <MDXProvider>
      <div className='znc'>
        <Root />
      </div>
    </MDXProvider>
  // </React.StrictMode>
)
