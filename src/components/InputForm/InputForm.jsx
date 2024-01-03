import React from 'react'
import { InputContainer } from './style'

const InputForm = (props) => {

    const { placeholder = 'Input here', ...rests } = props
    const handleOnchangeInput = (e) => {
        props.onChange(e.target.value)
    }

    return (
        <InputContainer placeholder={placeholder} value={props.value} {...rests} onChange={handleOnchangeInput}/>
    )
}

export default InputForm