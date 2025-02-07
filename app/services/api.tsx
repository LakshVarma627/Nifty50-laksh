import axios from "axios"

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api"

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
})

export const getStockData = (symbol: string) => api.get(`/market/stock/${symbol}`)

export const getForecast = (historicalData: number[]) => api.post("/predictions/forecast", { historicalData })

export const getNewsSentiment = (symbol: string) => api.get(`/sentiment/news/${symbol}`)

export default api

