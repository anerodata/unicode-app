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
  const translationToSecondLang = useQuery([ 'translate', translateParamsToSecondLang ], fetchTranslation)
  console.log(translationToSecondLang.data)
  return (
    <section>
      <div>
  { defaultLangFirst }
  { defaultLangSecond }
  { defaultLangThird }
        <ConverterSectionFieldset
          title="Texto"
          onTextToReplaceChange={(value) => {
            const obj = {
              query: value,
              source: defaultLangFirst,
              target: defaultLangSecond
            }
            setTranslateParamsToSecondLang(obj)
            setIsLoading(true)
            props.onTextToReplaceChange
          }}
          defaultLang={defaultLangFirst}
          onLangChange={(value) => setDefaultLangFirst(value)}
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
