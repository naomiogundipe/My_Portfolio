import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <>
      <h1>Might be in the wrong place,re direct by clicking this link</h1>
      <Link to={'/'}>Portfolio Card</Link>
      or
      <Link to={'portfolio'}>Portfolio</Link>
    </>
  )
}

export default Error
