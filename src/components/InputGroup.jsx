import React from 'react'

const InputGroup = ({name, label, type='text', value=undefined}) => {
  return (
    <div className='flex flex-col gap-2'>
      <label htmlFor={name} className="text-lg font-semibold"> {label} </label> 
      <input type={type} name={name} id={name} value={value} className="py-2 px-3 rounded-lg"/>
    </div>
  )
}

export default InputGroup;