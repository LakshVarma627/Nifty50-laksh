"use client"

import { useState, type React } from "react"
import { Plus, X } from "lucide-react"
import StockCard from "../components/StockCard"

const initialWatchlist = [
  { symbol: "TCS", name: "Tata Consultancy Services", price: 3456.75, change: 2.3 },
  { symbol: "INFY", name: "Infosys", price: 1543.2, change: -0.8 },
  { symbol: "HDFCBANK", name: "HDFC Bank", price: 1678.9, change: 1.5 },
  { symbol: "RELIANCE", name: "Reliance Industries", price: 2345.6, change: 0.5 },
]

export default function Watchlist() {
  const [watchlist, setWatchlist] = useState(initialWatchlist)
  const [newStock, setNewStock] = useState("")

  const addToWatchlist = (e: React.FormEvent) => {
    e.preventDefault()
    if (newStock.trim() !== "") {
      setWatchlist([...watchlist, { symbol: newStock.toUpperCase(), name: "New Stock", price: 0, change: 0 }])
      setNewStock("")
    }
  }

  const removeFromWatchlist = (symbol: string) => {
    setWatchlist(watchlist.filter((stock) => stock.symbol !== symbol))
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Your Watchlist</h1>

      <form onSubmit={addToWatchlist} className="mb-8">
        <div className="flex">
          <input
            type="text"
            value={newStock}
            onChange={(e) => setNewStock(e.target.value)}
            placeholder="Add stock symbol (e.g., TCS)"
            className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:ring-indigo-500 focus:border-indigo-500"
          />
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-r-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            <Plus className="h-5 w-5 mr-2" />
            Add
          </button>
        </div>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {watchlist.map((stock) => (
          <div key={stock.symbol} className="relative">
            <StockCard name={stock.name} price={stock.price} change={stock.change} />
            <button
              onClick={() => removeFromWatchlist(stock.symbol)}
              className="absolute top-2 right-2 p-1 rounded-full bg-red-100 text-red-600 hover:bg-red-200"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
