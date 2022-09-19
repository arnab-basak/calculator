import React from 'react'

const Button = ({
  text,
  className,
  clickHandler
}) => {
  return <button 
    className={`btn ${className}`}
    onClick={clickHandler}
    >{text}</button>
}
export default Button