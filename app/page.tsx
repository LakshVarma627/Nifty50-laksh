import Link from "next/link"
import { ArrowUpRight, TrendingUp, DollarSign, BarChart2 } from "lucide-react"
import StockCard from "./components/StockCard"
import MarketOverview from "./components/MarketOverview"
import NewsCard from "./components/NewsCard"

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Nifty 50 Analysis</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2">
          <MarketOverview />
        </div>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Market Cap</h2>
            <p className="text-3xl font-bold text-gray-900">₹182.3T</p>
            <div className="flex items-center text-green-600 mt-2">
              <TrendingUp className="h-5 w-5 mr-1" />
              <span className="text-sm font-medium">0.8% (₹1.4T)</span>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">P/E Ratio</h2>
            <p className="text-3xl font-bold text-gray-900">22.5</p>
            <div className="flex items-center text-red-600 mt-2">
              <ArrowUpRight className="h-5 w-5 mr-1 transform rotate-90" />
              <span className="text-sm font-medium">-0.3 (1.3%)</span>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Dividend Yield</h2>
            <p className="text-3xl font-bold text-gray-900">1.32%</p>
            <div className="flex items-center text-gray-600 mt-2">
              <DollarSign className="h-5 w-5 mr-1" />
              <span className="text-sm font-medium">No change</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Top Gainers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StockCard symbol="TCS" />
          <StockCard symbol="INFY" />
          <StockCard symbol="HDFCBANK" />
          <StockCard symbol="RELIANCE" />
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <NewsCard
            title="RBI Keeps Repo Rate Unchanged at 6.5%"
            source="Economic Times"
            time="2 hours ago"
            symbol="NIFTY"
          />
          <NewsCard
            title="IT Stocks Rally on Strong Q4 Results"
            source="Moneycontrol"
            time="4 hours ago"
            symbol="TCS"
          />
          <NewsCard title="Nifty 50 Hits All-Time High" source="LiveMint" time="6 hours ago" symbol="NIFTY" />
        </div>
      </div>

      <div className="text-center">
        <Link
          href="/stocks"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          View All Stocks
          <BarChart2 className="ml-2 -mr-1 h-5 w-5" />
        </Link>
      </div>
    </div>
  )
}

