import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const InlineField = ({ value, setValue }) => {
  const [editValue, setEditValue] = useState(value);
  const onChange = (event) => setEditValue(event.target.value);

  const onKeyDown = (event) => {
    if (event.key === "Enter" || event.key === "Escape") {
      event.target.blur();
    }
  }

  const onBlur = (event) => {
    setValue(event.target.value);
  }

  return (
    <input
      type="text"
      aria-label="Field name"
      value={editValue}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
      class="inline-edit-field"
    />
  )
}


export default InlineField
