import ConverterSectionFieldset from './ConverterSectionFieldset.jsx'
import { useEffect, useState, useCallback } from 'react'
import fetchTranslation from './fetchTranslation.jsx'
import { debounceSetup } from './utils.js'
const ConverterSection = (props) => {
  const [ defaultLangFirst, setDefaultLangFirst ] = useState('es')
  const [ defaultLangSecond, setDefaultLangSecond ] = useState('en')
  const [ defaultLangThird, setDefaultLangThird ] = useState('pt')
  const [ isLoading, setIsLoading ] = useState(false) 
  const [ inputValue, setInputValue ] = useState('')
  const debounceMs = 750
  const debounce = useCallback(
    debounceSetup(async ({ inputValue, defaultLangFirst, defaultLangSecond, defaultLangThird}) => {
      const debounceMsBetweenFetchs = 500
      const translate = async (languageTarget) => {
        const obj = {
          query: inputValue,
          source: defaultLangFirst,
          target: languageTarget
        }
        const res = await fetchTranslation(obj)
        return res
      }
      if (inputValue === '') {
        props.onTextToReplaceChange('', '')
        return 
      }
      setIsLoading(true)
      const secondLangRes = await translate(defaultLangSecond)
      await new Promise((resolve) => setTimeout(() => resolve()), debounceMsBetweenFetchs)
      const thirdLangRes = await translate(defaultLangThird)
      props.onTextToReplaceChange(secondLangRes.translatedText, thirdLangRes.translatedText)
      setIsLoading(false)
    }, debounceMs),
    []
  ) 
  useEffect(() => {
    debounce({
      inputValue: inputValue,
      defaultLangFirst: defaultLangFirst,
      defaultLangSecond: defaultLangSecond,
      defaultLangThird: defaultLangThird
    })
  }, [inputValue, defaultLangFirst, defaultLangSecond, defaultLangThird])
  return (
    <section>
      <div>
        <ConverterSectionFieldset
          title="Texto"
          onTextToReplaceChange={(value) => setInputValue(value)}
          defaultLang={defaultLangFirst}
          onLangChange={(value) => setDefaultLangFirst(value)}
          value={inputValue}
        />
        <ConverterSectionFieldset
          title="Texto con caracteres Unicode en notación de escape"
          value={props.secondValueModified}
          readOnly={true}
          defaultLang={defaultLangSecond}
          loading={isLoading}
          onLangChange={(value) => setDefaultLangSecond(value)}
        />
        <ConverterSectionFieldset
          title="Texto con caracteres Unicode en notación de escape"
          value={props.thirdValueModified}
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
