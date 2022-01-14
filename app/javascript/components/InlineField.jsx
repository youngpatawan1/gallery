import React from 'react'
import ReactDOM from 'react-dom'

const InlineField = ({ value, setValue }) => {
  const onChange = (event) => setValue(event.target.value);

  const onKeyDown = (event) => {
    if (event.key === "Enter" || event.key === "Escape") {
      event.target.blur();
    }
  }

  return (
    <input
      type="text"
      aria-label="Field name"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  )
}


export default InlineField
