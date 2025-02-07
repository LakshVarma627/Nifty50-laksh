"use client"

import { useState } from "react"
import { Star } from "lucide-react"

export default function Feedback() {
  const [rating, setRating] = useState(0)
  const [feedback, setFeedback] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle feedback submission here
    console.log("Feedback submitted:", { rating, feedback })
    // Reset form after submission
    setRating(0)
    setFeedback("")
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Provide Feedback</h1>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Rate your experience</label>
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className={`p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                    rating >= star ? "text-yellow-400" : "text-gray-300"
                  }`}
                >
                  <Star className="h-8 w-8" fill={rating >= star ? "currentColor" : "none"} />
                </button>
              ))}
            </div>
          </div>
          <div>
            <label htmlFor="feedback" className="block text-sm font-medium text-gray-700">
              Your feedback
            </label>
            <textarea
              id="feedback"
              name="feedback"
              rows={4}
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Tell us about your experience..."
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

