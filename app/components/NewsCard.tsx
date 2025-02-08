"use client"

import { Clock } from "lucide-react"
import { useState, useEffect } from "react"
import { getNewsSentiment } from "../../services/api"

interface NewsCardProps {
  title: string
  source: string
  time: string
  symbol: string
}

export default function NewsCard({ title, source, time, symbol }: NewsCardProps) {
  const [sentiment, setSentiment] = useState<string | null>(null)

  useEffect(() => {
    const fetchSentiment = async () => {
      try {
        const response = await getNewsSentiment(symbol)
        // This is a simplified example. In a real-world scenario, you'd process the news data to determine sentiment.
        const randomSentiment = Math.random()
        if (randomSentiment > 0.66) {
          setSentiment("Positive")
        } else if (randomSentiment > 0.33) {
          setSentiment("Neutral")
        } else {
          setSentiment("Negative")
        }
      } catch (error) {
        console.error("Failed to fetch news sentiment:", error)
      }
    }

    fetchSentiment()
  }, [symbol])

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>{source}</span>
        <div className="flex items-center">
          <Clock className="h-4 w-4 mr-1" />
          <span>{time}</span>
        </div>
      </div>
      {sentiment && (
        <div
          className={`mt-2 text-sm font-medium ${
            sentiment === "Positive" ? "text-green-600" : sentiment === "Negative" ? "text-red-600" : "text-yellow-600"
          }`}
        >
          Sentiment: {sentiment}
        </div>
      )}
    </div>
  )
}
