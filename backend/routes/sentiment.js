const express = require("express")
const axios = require("axios")
const router = express.Router()

const NEWS_API_KEY = process.env.NEWS_API_KEY

router.get("/news/:symbol", async (req, res) => {
  const { symbol } = req.params
  try {
    const response = await axios.get(`https://newsapi.org/v2/everything?q=${symbol}&apiKey=${NEWS_API_KEY}`)
    res.json(response.data)
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch news data" })
  }
})

module.exports = router

