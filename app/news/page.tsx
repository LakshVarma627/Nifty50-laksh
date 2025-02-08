"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import NewsCard from "../../components/NewsCard"

const initialNews = [
  {
    id: 1,
    title: "RBI Keeps Repo Rate Unchanged at 6.5%",
    content:
      "The Reserve Bank of India (RBI) has decided to keep the repo rate unchanged at 6.5% in its latest monetary policy meeting...",
    source: "Economic Times",
    time: "2 hours ago",
  },
  {
    id: 2,
    title: "IT Stocks Rally on Strong Q4 Results",
    content:
      "Major IT companies have reported strong Q4 results, leading to a rally in IT stocks. TCS, Infosys, and Wipro saw significant gains...",
    source: "Moneycontrol",
    time: "4 hours ago",
  },
  {
    id: 3,
    title: "Nifty 50 Hits All-Time High",
    content:
      "The Nifty 50 index has reached a new all-time high, crossing the 18,000 mark for the first time. The surge was led by banking and IT stocks...",
    source: "LiveMint",
    time: "6 hours ago",
  },
  {
    id: 4,
    title: "Government Announces New PLI Scheme for Textile Sector",
    content:
      "The Indian government has announced a new Production Linked Incentive (PLI) scheme for the textile sector, aiming to boost domestic manufacturing...",
    source: "Business Standard",
    time: "1 day ago",
  },
  {
    id: 5,
    title: "Oil Prices Surge Amid Middle East Tensions",
    content:
      "Global oil prices have surged due to escalating tensions in the Middle East. Brent crude oil prices have crossed $80 per barrel...",
    source: "Reuters",
    time: "1 day ago",
  },
]

export default function News() {
  const [news, setNews] = useState(initialNews)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredNews = news.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.content.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Latest News</h1>

      <div className="mb-8">
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search news..."
            className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      <div className="space-y-6">
        {filteredNews.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-lg shadow-md">
            <NewsCard title={item.title} source={item.source} time={item.time} symbol="NIFTY" />
            <p className="mt-2 text-gray-600">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
