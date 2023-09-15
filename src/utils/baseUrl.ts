let baseUrl = 'http://localhost:3001/api'

if (process.env.NODE_ENV === 'production') {
  baseUrl = 'https://www.keikkakaveri.fi/api'
}

export default baseUrl
