import ConverterSectionFieldset from './ConverterSectionFieldset.jsx'
import { useEffect, useState, useCallback } from 'react'
import fetchTranslation from './fetchTranslation.jsx'
const ConverterSection = (props) => {
  const [ defaultLangFirst, setDefaultLangFirst ] = useState('es')
  const [ defaultLangSecond, setDefaultLangSecond ] = useState('en')
  const [ defaultLangThird, setDefaultLangThird ] = useState('pt')
  const [ isLoading, setIsLoading ] = useState(false) 
  const [ inputValue, setInputValue ] = useState('')
  const debounceSetup = (callback, ms) => {
    let timerId
    return (...args) => {
      clearTimeout(timerId)
      timerId = setTimeout(() => {
        callback(...args)
      }, ms)
    }
  }
  const debounceMs = 1000
  const debounce = useCallback(
    debounceSetup((value) => {
      const translate = async (languageTarget) => {
        setIsLoading(true)
        const obj = {
          query: value,
          source: defaultLangFirst,
          target: languageTarget
        }
        const res = await fetchTranslation(obj)
        return res
      }
      translate(defaultLangSecond).then(res => {
        props.onTextToReplaceChange(res.translatedText)
        setIsLoading(false)
      })
    }, debounceMs),
    []
  ) 
  useEffect(() => {
    if (inputValue !== '') {
      setIsLoading(true)
      debounce(inputValue, 2)
    }
  }, [inputValue])
  return (
    <section>
      <div>
        { defaultLangFirst }
        { defaultLangSecond }
        { defaultLangThird }
        <ConverterSectionFieldset
          title="Texto"
          onTextToReplaceChange={(value) => setInputValue(value)}
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
