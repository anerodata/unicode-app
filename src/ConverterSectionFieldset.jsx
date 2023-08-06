import langs from './data/langs.js'
const ConverterSection = (props) => {
  const value = props.loading ? '...' : props.value
  return (
    <div>
      <h3>{props.title}</h3>
      <select defaultValue={props.defaultLang} onChange={(e) => {
        const newValue = e.target.value
        props.onLangChange(newValue)
      }}>
        {
          langs.map(lang =>
            <option value={lang.code} key={lang.code}>
              {lang.name}
            </option>
          )
        } 
      </select>
      <textarea cols="30" rows="10" value={value} readOnly={props.readOnly} onChange={(e) => {
        const newText = e.target.value
        props.onTextToReplaceChange(newText)
      }}>
      </textarea>
    </div>
  )
}
export default ConverterSection
