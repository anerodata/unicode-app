import { createRoot } from 'react-dom/client'
import { useState } from 'react'
import ConverterSection from './ConverterSection.jsx'

const App = () => {
  const [ textModifiedHook, setTextModifiedHook ] = useState('')
  const replaceUTFWithUnicode = (str) => {
    const regex = /[^\u{0000}-\u{007F}]/gu
    return str.replace(regex, (match) => {
      const codePoint = match.codePointAt(0).toString(16)
      const amountOfZeros = 4 - codePoint.length
      return '\\u' + '0'.repeat(amountOfZeros < 0 ? 0 : amountOfZeros) + codePoint
    })
  }
  return (
    <div>
      <ConverterSection onTextToReplaceChange={(value) => {
        setTextModifiedHook(replaceUTFWithUnicode(value))
      }} valueModified={textModifiedHook} />
    </div>
  )
}
const rootContainer = document.querySelector('#root')
const root = createRoot(rootContainer)
root.render(<App/>)
