import React from 'react'

const Button = ({children, onClicked, proprety, isActivated}) => {

  return (
    <button onClick={onClicked} className={proprety === isActivated? 'active': null}>
      {children}
      <p>{proprety}</p>
    </button>
  )
}

export default Button