const express = require("express")
const cors = require("cors")
const authRoutes = require("./routes/auth")
const marketRoutes = require("./routes/market")
const predictionsRoutes = require("./routes/predictions")
const sentimentRoutes = require("./routes/sentiment")

const app = express()
const port = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

// Routes
app.use("/api/auth", authRoutes)
app.use("/api/market", marketRoutes)
app.use("/api/predictions", predictionsRoutes)
app.use("/api/sentiment", sentimentRoutes)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

