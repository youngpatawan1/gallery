import React from 'react'
import ReactDOM from 'react-dom'
import InlineField from './InlineField'

class TransformSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      userId: this.props.userId,
      paintingId: this.props.paintingId
    };
  }

  setValue = (value) => {
    var arr = this.state;
    arr['value'] = value;
    arr['captionId'] = this.props.captionId
    const token = document.querySelector('meta[name="csrf-token"]').content;
    const method = arr['captionId'] == null ? "POST" : "PUT";
    const url = method == "POST" ? "/captions" : "/captions" + "/" + arr['captionId'];
    fetch(url, {
      method: method,
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(arr),
    })
      .then((data) => {
        if (data.ok) {
          return data.json();
          this.setState({value: value});
        }
        throw new Error("Network error.");
      })
      .catch((err) => console.error("Error: " + err));
  }

  render() {
    return <InlineField value={this.props.value} setValue={this.setValue.bind(this)}/>;
  }
}

export default TransformSection
