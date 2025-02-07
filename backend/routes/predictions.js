const express = require("express")
const tf = require("@tensorflow/tfjs-node")
const router = express.Router()

// This is a simplified example. In a real-world scenario, you'd have a more complex model and data preprocessing.
const model = tf.sequential()
model.add(tf.layers.dense({ units: 1, inputShape: [1] }))
model.compile({ loss: "meanSquaredError", optimizer: "sgd" })

router.post("/forecast", async (req, res) => {
  const { historicalData } = req.body
  try {
    const tensorData = tf.tensor2d(historicalData, [historicalData.length, 1])
    const prediction = model.predict(tensorData)
    const result = await prediction.data()
    res.json({ forecast: Array.from(result) })
  } catch (error) {
    res.status(500).json({ error: "Failed to generate forecast" })
  }
})

module.exports = router

