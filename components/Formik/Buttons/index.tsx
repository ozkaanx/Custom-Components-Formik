import React from 'react'
import './style.scss'

type ButtonProps = {
    type?: 'submit' | 'reset' | 'button',
    name?: string,
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'dark'
}

const FormButton = ({ type, name, variant }: ButtonProps) => {
    return (
        <button className={`form__button ${variant}`} type={type}> {name}</button>
    )
}

export default FormButton