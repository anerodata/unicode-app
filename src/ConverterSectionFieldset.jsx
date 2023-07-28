import langs from './data/langs.js'
const ConverterSection = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <select defaultValue={props.defaultLang}>
        {
          langs.map(lang =>
            <option value={lang.code} key={lang.code}>
              {lang.name}
            </option>
          )
        } 
      </select>
      <textarea cols="30" rows="10" value={props.value} readOnly={props.readOnly} onChange={(e) => {
        const newText = e.target.value
        props.onTextToReplaceChange(newText)
      }}>
      </textarea>
    </div>
  )
}
export default ConverterSection
