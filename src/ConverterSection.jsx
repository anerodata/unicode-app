import ConverterSectionFieldset from './ConverterSectionFieldset.jsx'
const ConverterSection = (props) => {
  return (
    <section>
      <div>
        <ConverterSectionFieldset
          title="Texto"
          onTextToReplaceChange={props.onTextToReplaceChange}
          defaultLang="ES"
        />
        <ConverterSectionFieldset
          title="Texto con caracteres Unicode en notación de escape"
          value={props.valueModified}
          readOnly={true}
          defaultLang="EN"
        />
        <ConverterSectionFieldset
          title="Texto con caracteres Unicode en notación de escape"
          value={props.valueModified}
          readOnly={true}
          defaultLang="PT"
        />
      </div>
    </section>
  )
}
export default ConverterSection
