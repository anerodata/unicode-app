async function fetchTranslation ( queryKey ) {
  console.log(queryKey)
  const res = await fetch('https://translate.argosopentech.com/translate', {
    method: 'POST',
    body: JSON.stringify({
      q: queryKey.query,
      source: queryKey.source,
      target: queryKey.target
    }),
    headers: { 'Content-Type': 'application/json' }
  });
  return await res.json();
}
export default fetchTranslation
