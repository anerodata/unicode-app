import { createRoot } from 'react-dom/client'
import { useState } from 'react'
import ConverterSection from './ConverterSection.jsx'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const App = () => {
  const [ firstTextModifiedHook, setFirstTextModifiedHook ] = useState('')
  const [ secondTextModifiedHook, setSecondTextModifiedHook ] = useState('')
  const [ thirdTextModifiedHook, setThirdTextModifiedHook ] = useState('')
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        cacheTime: Infinity
      }
    }
  })
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
      <QueryClientProvider client={queryClient}>
        <ConverterSection
          onTextToTranslateChange={(values) => {
            setSecondTextModifiedHook(replaceUTFWithUnicode(values[0]))
            setThirdTextModifiedHook(replaceUTFWithUnicode(values[1]))
          }}
          onTextToReplaceChange={(value) => {
            setFirstTextModifiedHook(replaceUTFWithUnicode(value))
          }}
          firstValueModified={firstTextModifiedHook} 
          secondValueModified={secondTextModifiedHook} 
          thirdValueModified={thirdTextModifiedHook}
        />
      </QueryClientProvider>
    </div>
  )
}
const rootContainer = document.querySelector('#root')
const root = createRoot(rootContainer)
root.render(<App/>)
