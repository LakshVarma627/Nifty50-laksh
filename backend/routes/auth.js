const express = require("express")
const { createClient } = require("@supabase/supabase-js")
const router = express.Router()

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)

router.post("/signup", async (req, res) => {
  const { email, password } = req.body
  try {
    const { user, error } = await supabase.auth.signUp({ email, password })
    if (error) throw error
    res.json({ user })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

router.post("/login", async (req, res) => {
  const { email, password } = req.body
  try {
    const { user, error } = await supabase.auth.signIn({ email, password })
    if (error) throw error
    res.json({ user })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

module.exports = router

