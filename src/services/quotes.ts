import type { QuoteResponse } from "~/types/quotes"

// Api documentation: https://pprathameshmore.github.io/QuoteGarden/
const API_QUOTES_URL = 'https://quote-garden.onrender.com/api/v3/quotes'
const QUOTES_LIMIT = 50

export const getRandomQuote = async () => {
  const reponse = await fetch(`${API_QUOTES_URL}/random?limit=1`)
  const dataResponse: QuoteResponse = await reponse.json()
  const [firstQuote] = dataResponse.data

  return firstQuote
}

export const getQuotesByAuhor = async (author: string | null) => {
  if (!author) return []

  const reponse = await fetch(`${API_QUOTES_URL}?limit=${QUOTES_LIMIT}&author=${author}`)
  const dataResponse: QuoteResponse = await reponse.json()
  const quotes = dataResponse.data
  return quotes
}