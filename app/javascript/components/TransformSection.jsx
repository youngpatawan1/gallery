import React from 'react'
import ReactDOM from 'react-dom'
import InlineField from './InlineField'

class TransformSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  render() {
    return <InlineField value={this.state.value} />;
  }
}

export default TransformSection
