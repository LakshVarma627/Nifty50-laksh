"use client"

import { useState } from "react"
import { ArrowUpRight, BarChart2 } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { date: "2023-01-01", price: 3200 },
  { date: "2023-02-01", price: 3300 },
  { date: "2023-03-01", price: 3400 },
  { date: "2023-04-01", price: 3350 },
  { date: "2023-05-01", price: 3500 },
  { date: "2023-06-01", price: 3600 },
]

export default function StockDetailsPage({ params }: { params: { symbol: string } }) {
  const [timeframe, setTimeframe] = useState("1D")

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">{params.symbol} Stock Details</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2">
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-900">₹3,456.75</h2>
              <div className="flex items-center text-green-600">
                <ArrowUpRight className="h-5 w-5 mr-1" />
                <span className="text-sm font-medium">2.3% (₹77.75)</span>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="price" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
            <div className="flex justify-center mt-4">
              {["1D", "1W", "1M", "3M", "6M", "1Y", "All"].map((tf) => (
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
        </div>
        <div>
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Key Statistics</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Market Cap</span>
                <span className="font-medium">₹13.45T</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">P/E Ratio</span>
                <span className="font-medium">25.6</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Dividend Yield</span>
                <span className="font-medium">1.8%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">52 Week High</span>
                <span className="font-medium">₹3,698.40</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">52 Week Low</span>
                <span className="font-medium">₹2,867.90</span>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">About {params.symbol}</h3>
            <p className="text-gray-600">
              {params.symbol} is a leading Indian multinational information technology company providing a wide array of
              services including consulting, technology, outsourcing, and next-generation digital solutions.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Financial Highlights</h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Revenue (TTM)</span>
              <span className="font-medium">₹1,568.70B</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Net Income (TTM)</span>
              <span className="font-medium">₹382.27B</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">EPS (TTM)</span>
              <span className="font-medium">₹103.62</span>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Analyst Recommendations</h3>
          <div className="flex items-center justify-between mb-4">
            <div className="text-3xl font-bold text-green-600">Buy</div>
            <div className="text-gray-600">
              <span className="font-medium">28</span> out of <span className="font-medium">35</span> analysts
            </div>
          </div>
          <div className="bg-gray-200 h-4 rounded-full">
            <div className="bg-green-500 h-4 rounded-full" style={{ width: "80%" }}></div>
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>Strong Buy</span>
            <span>Hold</span>
            <span>Strong Sell</span>
          </div>
        </div>
      </div>

      <div className="text-center">
        <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
          Add to Watchlist
          <BarChart2 className="ml-2 -mr-1 h-5 w-5" />
        </button>
      </div>
    </div>
  )
}

