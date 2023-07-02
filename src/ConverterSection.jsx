const ConverterSection = (props) => {
  return (
    <section>
      <div>
        <h3>Texto</h3>
        <textarea cols="30" rows="10" onChange={(e) => {
          const newText = e.target.value
          props.onTextToReplaceChange(newText)
        }}>
        </textarea>
        <h3>Texto con caracteres Unicode en notación de escape</h3>
        <textarea readOnly value={props.valueModified} cols="30" rows="10">
        </textarea>
      </div>
    </section>
  )
}
export default ConverterSection
