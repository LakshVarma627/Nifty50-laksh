const express = require("express")
const axios = require("axios")
const router = express.Router()

const ALPHA_VANTAGE_API_KEY = process.env.ALPHA_VANTAGE_API_KEY

router.get("/stock/:symbol", async (req, res) => {
  const { symbol } = req.params
  try {
    const response = await axios.get(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${ALPHA_VANTAGE_API_KEY}`,
    )
    res.json(response.data)
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch stock data" })
  }
})

module.exports = router

