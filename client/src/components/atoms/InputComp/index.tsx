import React from 'react'

interface InputProps{
    type: string,
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void,
    name: string,
    placeholder:string,
    value: string,
    inputStyle: React.CSSProperties,
    className:string
    



}
const InputComp:React.FC<InputProps> = ({type="text",onChange, name,placeholder,value,inputStyle,className="border border-gray-300 rounded px-3 py-2 w-full"}) => {
  return (
    <input type={type} onChange={onChange}
       value={value} placeholder={placeholder} 
       name={name}
       style={inputStyle}
       className={className}

    />
  )
}

export default InputComp
