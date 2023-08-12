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
      const obj = {
        query: inputValue,
        source: defaultLangFirst,
        target: defaultLangSecond
      }
      setIsLoading(true)
      fetchTranslation(obj).then(res => {
        console.log(res)
        props.onTextToReplaceChange(res.translatedText)
        setIsLoading(false)
      })
    }
  }, [inputValue])
  const handleInputChange = val => {
    setIsLoading(true)
    setInputValue(val)
    setIsLoading(false)
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
