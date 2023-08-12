import ConverterSectionFieldset from './ConverterSectionFieldset.jsx'
import { useEffect, useState } from 'react'
import fetchTranslation from './fetchTranslation.jsx'
const ConverterSection = (props) => {
  const [ defaultLangFirst, setDefaultLangFirst ] = useState('es')
  const [ defaultLangSecond, setDefaultLangSecond ] = useState('en')
  const [ defaultLangThird, setDefaultLangThird ] = useState('pt')
  const [ isLoading, setIsLoading ] = useState(false) 
  const [ inputValue, setInputValue ] = useState('')
  useEffect(() => {
    if (inputValue !== '') {
      const translate = async (languageTarget) => {
        setIsLoading(true)
        const obj = {
          query: inputValue,
          source: defaultLangFirst,
          target: languageTarget
        }
        const res = await fetchTranslation(obj)
        return res
      }
      translate(defaultLangSecond).then(res => {
        setIsLoading(true)
        props.onTextToReplaceChange(res.translatedText)
        setIsLoading(false)
      })
    }
  }, [inputValue])
  const handleInputChange = val => {
    setInputValue(val)
  }
  return (
    <section>
      <div>
        { defaultLangFirst }
        { defaultLangSecond }
        { defaultLangThird }
        <ConverterSectionFieldset
          title="Texto"
          onTextToReplaceChange={handleInputChange}
          defaultLang={defaultLangFirst}
          onLangChange={(value) => setDefaultLangFirst(value)}
          value={inputValue}
        />
        <ConverterSectionFieldset
          title="Texto con caracteres Unicode en notación de escape"
          value={props.valueModified}
          readOnly={true}
          defaultLang={defaultLangSecond}
          loading={isLoading}
          onLangChange={(value) => setDefaultLangSecond(value)}
        />
        <ConverterSectionFieldset
          title="Texto con caracteres Unicode en notación de escape"
          value={props.valueModified}
          readOnly={true}
          defaultLang={defaultLangThird}
          loading={isLoading}
          onLangChange={(value) => setDefaultLangThird(value)}
        />
      </div>
    </section>
  )
}
export default ConverterSection
