import langs from './data/langs.js'
const ConverterSection = (props) => {
  const buildLangSelect = () => {
    let langSelect
    if(props.defaultLang) {
      langSelect = <select defaultValue={props.defaultLang} onChange={(e) => {
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
    }
    return langSelect
  }
  const value = props.loading ? '...' : props.value
  const langSelect = buildLangSelect()
  return (
    <div>
      <h3>{props.title}</h3>
      {langSelect}
      <textarea cols="30" rows="10" value={value} readOnly={props.readOnly} onChange={(e) => {
        const newText = e.target.value
        props.onValueChange(newText)
      }}>
      </textarea>
    </div>
  )
}
export default ConverterSection
