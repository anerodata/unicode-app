async function fetchTranslation () {
  const res = await fetch('https://translate.argosopentech.com/translate', {
    method: 'POST',
    body: JSON.stringify({
      q: 'Esto es una prueba',
      source: 'es',
      target: 'en'
    }),
    headers: { 'Content-Type': 'application/json' }
  });
  console.log(await res.json());
}
export default fetchTranslation
