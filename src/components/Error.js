import React from 'react'

const Error = ({error}) => (
  error && <div className='error'>{error}</div>
)

export default Error
