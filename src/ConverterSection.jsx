import ConverterSectionFieldset from './ConverterSectionFieldset.jsx'
import { useEffect, useState, useCallback } from 'react'
import fetchTranslation from './fetchTranslation.jsx'
import { debounceSetup } from './utils.js'
import langs from './data/langs.js'
const getTitleSectionTranslated = (langCode) => {
  if (langCode) {
    const lang = langs.find((lang) => lang.code === langCode)
    return `Texto en ${lang.name} con caracteres Unicode en notación de escape`
  }
  return ''
}
const getTitleSectionUser = (langCode) => {
  if (langCode) {
    const lang = langs.find((lang) => lang.code === langCode)
    return `Texto en ${lang.name}`
  }
  return ''
}
const ConverterSection = (props) => {
  const [ defaultLangFirst, setDefaultLangFirst ] = useState('')
  const [ defaultLangSecond, setDefaultLangSecond ] = useState('')
  const [ defaultLangThird, setDefaultLangThird ] = useState('')
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
        props.onTextToTranslateChange(['', ''])
        return 
      }
      setIsLoading(true)
      const secondLangRes = await translate(defaultLangSecond)
      await new Promise((resolve) => setTimeout(() => resolve()), debounceMsBetweenFetchs)
      const thirdLangRes = await translate(defaultLangThird)
      props.onTextToTranslateChange([secondLangRes.translatedText, thirdLangRes.translatedText])
      setIsLoading(false)
    }, debounceMs),
    []
  ) 
  const isLangDefined = () => defaultLangFirst !== '' && defaultLangSecond !== '' && defaultLangThird !== ''
  const getTranslationSection = () => {
    if (isLangDefined()) {
      return (
        <div>
        <ConverterSectionFieldset
          title={getTitleSectionTranslated(defaultLangSecond)}
          value={props.secondValueModified}
          readOnly={true}
          defaultLang={defaultLangSecond}
          loading={isLoading}
          onLangChange={(value) => setDefaultLangSecond(value)}
        />
        <ConverterSectionFieldset
          title={getTitleSectionTranslated(defaultLangThird)}
          value={props.thirdValueModified}
          readOnly={true}
          defaultLang={defaultLangThird}
          loading={isLoading}
          onLangChange={(value) => setDefaultLangThird(value)}
        />
        </div>
      )
    }
  }
  useEffect(() => {
    if (isLangDefined()) {
      debounce({
        inputValue: inputValue,
        defaultLangFirst: defaultLangFirst,
        defaultLangSecond: defaultLangSecond,
        defaultLangThird: defaultLangThird
      })
    } 
  }, [inputValue, defaultLangFirst, defaultLangSecond, defaultLangThird])
  return (
    <section>
      <div>
        <ConverterSectionFieldset
          //title={getTitleSectionUser(defaultLangFirst)}
          value={inputValue}
          onValueChange={(value) => {
            setInputValue(value)
            props.onTextToReplaceChange(value)
          }}
          onLangChange={(value) => setDefaultLangFirst(value)}
        />
        <ConverterSectionFieldset
          //title={getTitleSectionTranslated(defaultLangFirst)}
          value={props.firstValueModified}
          readOnly={true}
        />
        {getTranslationSection()}
      </div>
    </section>
  )
}
export default ConverterSection
