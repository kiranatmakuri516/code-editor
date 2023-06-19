import React, { useState, useEffect } from 'react';
import Editor from './Editor'

function App() {
  const [html, setHtml] = useState('')
  const [css, setCss] =useState('')
  const [js, setJs] = useState('')
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
    }, 250)

    return () => clearTimeout(timeout)
  }, [html, css, js]) 

  return (
    <>
      <div className="main top">
        <Editor
          lang="xml"
          name="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          lang="css"
          name="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor
          lang="javascript"
          name="JS"
          value={js}
          onChange={setJs}
        />
      </div>
      <div className="main">
        <iframe
          srcDoc={srcDoc} 
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  )
}

export default App;