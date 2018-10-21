import React from 'react'

export default function SectionTitleDescriptionFilter (props) {
  return <input type='text' onChange={e => {props.setTerm(e.target.value)}} />
}
