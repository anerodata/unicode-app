import { useState } from 'react'
const ConverterSection = (props) => {
  return (
    <section>
      <textarea cols="30" rows="10" onChange={(e) => {
        const newText = e.target.value
        props.onTextToReplaceChange(newText)
      }}>
      </textarea>
      <textarea readOnly value={props.valueModified} cols="30" rows="10">
      </textarea>
    </section>
  )
}
export default ConverterSection
