import React from 'react'
import ReactDOM from 'react-dom'
import InlineField from './InlineField'

class TransformSection extends React.Component {
  render() {
    return <InlineField value={this.props.name} />;
  }
}

export default TransformSection
