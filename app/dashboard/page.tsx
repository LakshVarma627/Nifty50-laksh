"use client"

import { useState } from "react"
import { ArrowUpRight, DollarSign, TrendingUp, BarChart2 } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import StockCard from "../../components/StockCard"

const portfolioData = [
  { date: "2023-01-01", value: 100000 },
  { date: "2023-02-01", value: 105000 },
  { date: "2023-03-01", value: 108000 },
  { date: "2023-04-01", value: 106000 },
  { date: "2023-05-01", value: 110000 },
  { date: "2023-06-01", value: 115000 },
]

export default function Dashboard() {
  const [timeframe, setTimeframe] = useState("1M")

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Portfolio Value</h2>
          <p className="text-3xl font-bold text-gray-900">₹1,15,000</p>
          <div className="flex items-center text-green-600 mt-2">
            <ArrowUpRight className="h-5 w-5 mr-1" />
            <span className="text-sm font-medium">15% (₹15,000)</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Today's Gain/Loss</h2>
          <p className="text-3xl font-bold text-gray-900">₹2,500</p>
          <div className="flex items-center text-green-600 mt-2">
            <ArrowUpRight className="h-5 w-5 mr-1" />
            <span className="text-sm font-medium">2.2%</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Total Invested</h2>
          <p className="text-3xl font-bold text-gray-900">₹1,00,000</p>
          <div className="flex items-center text-gray-600 mt-2">
            <DollarSign className="h-5 w-5 mr-1" />
            <span className="text-sm font-medium">Initial Investment</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Overall Return</h2>
          <p className="text-3xl font-bold text-gray-900">15%</p>
          <div className="flex items-center text-green-600 mt-2">
            <TrendingUp className="h-5 w-5 mr-1" />
            <span className="text-sm font-medium">₹15,000</span>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Portfolio Performance</h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={portfolioData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
        <div className="flex justify-center mt-4">
          {["1W", "1M", "3M", "6M", "1Y", "All"].map((tf) => (
            <button
              key={tf}
              className={`px-3 py-1 mx-1 rounded ${
                timeframe === tf ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setTimeframe(tf)}
            >
              {tf}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Stocks</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <StockCard name="TCS" price={3456.75} change={2.3} />
          <StockCard name="Infosys" price={1543.2} change={-0.8} />
          <StockCard name="HDFC Bank" price={1678.9} change={1.5} />
        </div>
      </div>

      <div className="text-center">
        <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
          View Full Portfolio
          <BarChart2 className="ml-2 -mr-1 h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
