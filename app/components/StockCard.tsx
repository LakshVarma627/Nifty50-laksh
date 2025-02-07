"use client"

import { useState, useEffect } from "react"
import { ArrowUpRight } from "lucide-react"
import { getStockData } from "../services/api"

interface StockCardProps {
  symbol: string
}

export default function StockCard({ symbol }: StockCardProps) {
  const [stockData, setStockData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await getStockData(symbol)
        setStockData(response.data["Global Quote"])
        setLoading(false)
      } catch (error) {
        console.error("Failed to fetch stock data:", error)
        setLoading(false)
      }
    }

    fetchStockData()
  }, [symbol])

  if (loading) {
    return <div>Loading...</div>
  }

  if (!stockData) {
    return <div>Failed to load stock data</div>
  }

  const price = Number.parseFloat(stockData["05. price"])
  const change = Number.parseFloat(stockData["09. change"])
  const changePercent = Number.parseFloat(stockData["10. change percent"].replace("%", ""))
  const isPositive = change >= 0

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{symbol}</h3>
      <p className="text-2xl font-bold text-gray-900">₹{price.toFixed(2)}</p>
      <div className={`flex items-center ${isPositive ? "text-green-600" : "text-red-600"} mt-2`}>
        <ArrowUpRight className={`h-5 w-5 mr-1 ${!isPositive && "transform rotate-90"}`} />
        <span className="text-sm font-medium">
          {changePercent.toFixed(2)}% (₹{Math.abs(change).toFixed(2)})
        </span>
      </div>
    </div>
  )
}

