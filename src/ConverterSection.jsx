import ConverterSectionFieldset from './ConverterSectionFieldset.jsx'
import { useQuery } from "@tanstack/react-query"
import { useState } from 'react'
import fetchTranslation from './fetchTranslation.jsx'
const ConverterSection = (props) => {
  const translation = useQuery(['search', {}], fetchTranslation)
  console.log(translation.data)
  const [ defaultLangFirst, setDefaultLangFirst ] = useState('ES')
  const [ defaultLangSecond, setDefaultLangSecond ] = useState('EN')
  const [ defaultLangThird, setDefaultLangThird ] = useState('PT')
  const [ isLoading, setIsLoading ] = useState(false) 
  return (
    <section>
      <div>
  { defaultLangFirst }
  { defaultLangSecond }
  { defaultLangThird }
        <ConverterSectionFieldset
          title="Texto"
          onTextToReplaceChange={() => {
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
        />
        <ConverterSectionFieldset
          title="Texto con caracteres Unicode en notación de escape"
          value={props.valueModified}
          readOnly={true}
          defaultLang={defaultLangThird}
          loading={isLoading}
        />
      </div>
    </section>
  )
}
export default ConverterSection
