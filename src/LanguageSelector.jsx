import langs from './data/langs.js'
console.log(langs)
const LanguageSelector = (props) => {
  return (
    <select>
      {
        langs.map(lang =>
          <option value={lang.code} key={lang.code}>
            {lang.name}
          </option>
        )
      } 
    </select>
  )
}
export default LanguageSelector
