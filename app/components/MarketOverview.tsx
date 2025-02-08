"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { name: "Jan", value: 17000 },
  { name: "Feb", value: 17500 },
  { name: "Mar", value: 18000 },
  { name: "Apr", value: 17800 },
  { name: "May", value: 18200 },
  { name: "Jun", value: 18500 },
]

export default function MarketOverview() {
  const [timeframe, setTimeframe] = useState("1M")

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Market Overview</h2>
        <div className="flex space-x-2">
          {["1D", "1W", "1M", "3M", "6M", "1Y"].map((tf) => (
            <button
              key={tf}
              onClick={() => setTimeframe(tf)}
              className={`px-3 py-1 text-sm rounded-md ${
                timeframe === tf ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {tf}
            </button>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-3xl font-bold text-gray-900">18,500.75</p>
          <div className="flex items-center text-green-600">
            <ArrowUpRight className="h-5 w-5 mr-1" />
            <span className="text-sm font-medium">1.2% (212.65)</span>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">Volume</p>
          <p className="text-lg font-semibold text-gray-800">234.5M</p>
        </div>
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#4f46e5" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
