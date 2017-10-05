import React, {Component} from 'react';

export default class CodeFilesPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: props.resource && props.resource.data
                && props.resource.data.code
                && Object.keys(props.resource.data.code)[0]
    }
  }

  componentWillReceiveProps(nextProps) {
    if (
      (
        !this.state.selected ||
        this.props.resource !== nextProps.resource)
      && nextProps.resource 
      && nextProps.resource.data
      && nextProps.resource.data.code
      && Object.keys(nextProps.resource.data.code)[0]
    ) {
      this.setState({
        selected: Object.keys(nextProps.resource.data.code)[0]
      })
    }
  }

  render = () => {
    const {
      props: {
        resource: {
          data: {
            code
          }
        }
      }, 
      state: {
        selected
      }
    } = this;
    return (
      <figure className="peritext-contextualization peritext-contextualization-block peritext-contextualization-web peritext-contextualizer-codefiles">
        {
          Object.keys(code).length > 1 &&
          <ul className="files-list">
            {
              Object.keys(code)
              .map(fileName => {
                const onSelect = () => this.setState({selected: fileName});
                return (
                  <li 
                    key={fileName}
                    className={fileName + (fileName === selected ? ' active' : '')}
                    onClick={onSelect}
                  >
                    {fileName} 
                  </li>
                )
              })
            }
          </ul>
        }
        {selected && <pre className="file-content">
          <code>
            {
              code[selected] &&
              code[selected]
              .split('\n')
              .map((line, index) => (
                <span className="code-line" key={index}>
                  {line}
                </span>
              ))
            }
          </code>
        </pre>}
      </figure>
    );
  }
};