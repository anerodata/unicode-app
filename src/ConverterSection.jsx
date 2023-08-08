import ConverterSectionFieldset from './ConverterSectionFieldset.jsx'
import { useQuery } from "@tanstack/react-query"
import { useState } from 'react'
import fetchTranslation from './fetchTranslation.jsx'
const ConverterSection = (props) => {
  const [ defaultLangFirst, setDefaultLangFirst ] = useState('es')
  const [ defaultLangSecond, setDefaultLangSecond ] = useState('en')
  const [ defaultLangThird, setDefaultLangThird ] = useState('pt')
  const [ isLoading, setIsLoading ] = useState(false) 
  const [ translateParamsToSecondLang, setTranslateParamsToSecondLang ] = useState({
    query: "",
    source: defaultLangFirst,
    target: defaultLangSecond
  })
  const debounce = (callback, ms) => {
    let timerId
    return (...args) => {
      clearTimeout(timerId)
      timerId = setTimeout(() => {
        alert(timerId)
        console.log(ms, ...args)
        callback(...args)
      }, ms);
      console.log(timerId)
    }
  }
  // const translationToSecondLang = useQuery([ 'translate', translateParamsToSecondLang ], fetchTranslation)
  // console.log(translationToSecondLang.data)
  return (
    <section>
      <div>
  { defaultLangFirst }
  { defaultLangSecond }
  { defaultLangThird }
        <ConverterSectionFieldset
          title="Texto"
          onTextToReplaceChange={debounce((value) => {
            const obj = {
              query: value,
              source: defaultLangFirst,
              target: defaultLangSecond
            }
            // setTranslateParamsToSecondLang(obj)
            props.onTextToReplaceChange(value)
          }, 2000)}
          defaultLang={defaultLangFirst}
          onLangChange={(value) => setDefaultLangFirst(value)}
        />
        <ConverterSectionFieldset
          title="Texto con caracteres Unicode en notación de escape"
          value={props.valueModified}
          readOnly={true}
          defaultLang={defaultLangSecond}
          onLangChange={(value) => setDefaultLangSecond(value)}
        />
        <ConverterSectionFieldset
          title="Texto con caracteres Unicode en notación de escape"
          value={props.valueModified}
          readOnly={true}
          defaultLang={defaultLangThird}
          onLangChange={(value) => setDefaultLangThird(value)}
        />
      </div>
    </section>
  )
}
export default ConverterSection
