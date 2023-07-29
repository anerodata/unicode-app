import ConverterSectionFieldset from './ConverterSectionFieldset.jsx'
import { useState } from 'react'
const ConverterSection = (props) => {
  const [ defaultLangFirst, setDefaultLangFirst ] = useState('ES')
  const [ defaultLangSecond, setDefaultLangSecond ] = useState('EN')
  const [ defaultLangThird, setDefaultLangThird ] = useState('PT')
  return (
    <section>
      <div>
  { defaultLangFirst }
  { defaultLangSecond }
  { defaultLangThird }
        <ConverterSectionFieldset
          title="Texto"
          onTextToReplaceChange={props.onTextToReplaceChange}
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
