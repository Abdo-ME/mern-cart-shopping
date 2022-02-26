import React from 'react'

function Input({label,type,name,handleChange}) {
  return (
    <div>
        <label >{label}</label>
        <input type={type} required name={name} onChange={handleChange} />
    </div>
  )
}

export default Input