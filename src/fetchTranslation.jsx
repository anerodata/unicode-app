async function fetchTranslation ({ queryKey }) {
  console.log(queryKey)
  const { query, source, target } = queryKey[1]
  console.log(query, source, target)
  const res = await fetch('https://translate.argosopentech.com/translate', {
    method: 'POST',
    body: JSON.stringify({
      q: query,
      source: source,
      target: target
    }),
    headers: { 'Content-Type': 'application/json' }
  });
  return await res.json();
}
export default fetchTranslation
