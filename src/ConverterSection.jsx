import LanguageSelector from './LanguageSelector.jsx'
const ConverterSection = (props) => {
  return (
    <section>
      <div>
        <div>
          <h3>Texto</h3>
          <LanguageSelector />
          <textarea cols="30" rows="10" onChange={(e) => {
            const newText = e.target.value
            props.onTextToReplaceChange(newText)
          }}>
          </textarea>
        </div>
        <div>
          <h3>Texto con caracteres Unicode en notación de escape</h3>
          <LanguageSelector />
          <textarea readOnly value={props.valueModified} cols="30" rows="10">
          </textarea>
        </div>
      </div>
    </section>
  )
}
export default ConverterSection
