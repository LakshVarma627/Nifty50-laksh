"use client"

import { useState } from "react"
import { ArrowUpRight, ArrowDownRight, DollarSign, TrendingUp, BarChart2 } from "lucide-react"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"

const portfolioData = [
  { name: "TCS", value: 35000 },
  { name: "Infosys", value: 25000 },
  { name: "HDFC Bank", value: 30000 },
  { name: "Reliance", value: 20000 },
  { name: "Others", value: 5000 },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"]

export default function Portfolio() {
  const [view, setView] = useState("allocation")

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Your Portfolio</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Total Value</h2>
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
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-900">
            Portfolio {view === "allocation" ? "Allocation" : "Performance"}
          </h2>
          <div className="space-x-2">
            <button
              className={`px-3 py-1 rounded ${
                view === "allocation" ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setView("allocation")}
            >
              Allocation
            </button>
            <button
              className={`px-3 py-1 rounded ${
                view === "performance" ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setView("performance")}
            >
              Performance
            </button>
          </div>
        </div>
        {view === "allocation" ? (
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={portfolioData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
              >
                {portfolioData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <div className="space-y-4">
            {portfolioData.map((stock, index) => (
              <div key={stock.name} className="flex items-center justify-between">
                <span className="font-medium">{stock.name}</span>
                <div className="flex items-center">
                  <span className="mr-2">₹{stock.value}</span>
                  <div className={`flex items-center ${index % 2 === 0 ? "text-green-600" : "text-red-600"}`}>
                    {index % 2 === 0 ? (
                      <ArrowUpRight className="h-4 w-4 mr-1" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4 mr-1" />
                    )}
                    <span>{(Math.random() * 5 + 1).toFixed(2)}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="text-center">
        <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
          Add New Stock
          <BarChart2 className="ml-2 -mr-1 h-5 w-5" />
        </button>
      </div>
    </div>
  )
}

