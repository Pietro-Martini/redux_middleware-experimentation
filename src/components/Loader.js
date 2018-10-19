import React from 'react'

const Loader = ({loaderShown}) => (
  loaderShown ? <p>Fetching Data...</p> : null
)

export default Loader
