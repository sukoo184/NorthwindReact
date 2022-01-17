import React from 'react'

const TextInput = ({ name, lable, onChange, placeHolder, value, error }) => {
  let wrapperClass = 'form-grup'
  if (error && error.length > 0) {
    wrapperClass += ' has-error'
  }
  return (
    <div className={wrapperClass}>
      <lable htmlFor={name}></lable>
      <div className="field">
        <input
          type="text"
          name={name}
          className="form-control"
          placeHolder={placeHolder}
          value={value}
          onChange={onChange}
        />
        {error && <div className="alert alert-danger">{error} </div>}
      </div>
    </div>
  )
}

export default TextInput
