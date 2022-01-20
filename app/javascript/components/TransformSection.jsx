import React from 'react'
import ReactDOM from 'react-dom'
import InlineField from './InlineField'

class TransformSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      userId: this.props.userId,
      paintingId: this.props.paintingId
    };

    this.setValue = this.setValue.bind(this);
  }

  setValue = (value) => {
    this.setState({value: value});
    debugger
    const url = "/captions";
    const token = document.querySelector('meta[name="csrf-token"]').content;
    fetch(url, {
      method: "post",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((data) => {
        if (data.ok) {
          return data.json();
        }
        throw new Error("Network error.");
      })
      .catch((err) => console.error("Error: " + err));
  }

  render() {
    return <InlineField value={this.state.value} setValue={this.setValue}/>;
  }
}

export default TransformSection
