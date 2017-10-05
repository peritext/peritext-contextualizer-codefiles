import React from 'react';

export default ({
  resource: {
    data: {
      code={}
    }
  },
  // contextualizer,
  // contextualization
}) => {
  return (
    <div className="peritext-contextualization peritext-contextualization-block peritext-contextualization-codex peritext-contextualizer-codefiles">
      {
        Object.keys(code)
        .map(fileName => {
          return <div key={fileName} className="file-display">
            {Object.keys(code).length > 1 && <h2>{fileName}</h2>}
            <pre>
              <code>
                {
                  code[fileName] &&
                  code[fileName]
                  .split('\n')
                  .map((line, index) => (
                    <span className="code-line" key={index}>
                      {line}
                    </span>
                  ))
                }
              </code>
            </pre>
          </div>
        })
      }
    </div>
  )
}