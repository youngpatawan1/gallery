import React from 'react'
import ReactDOM from 'react-dom'

const InlineField = ({ value, setValue }) => {
  const onChange = (event) => setValue(event.target.value);

  return (
    <input
      type="text"
      aria-label="Field name"
      value={value}
      onChange={onChange}
    />
  )
}


export default InlineField
