require("dotenv").config()
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const SpotifyWebApi = require("spotify-web-api-node")
const path = require('path');
const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post("/refresh", (req, res) => {
  const refreshToken = req.body.refreshToken
  const spotifyApi = new SpotifyWebApi({
    redirectUri: process.env.REDIRECT_URI,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken,
  })

  spotifyApi
    .refreshAccessToken()
    .then(data => {
      res.json({
        accessToken: data.body.accessToken,
        expiresIn: data.body.expiresIn,
      })
    })
    .catch(err => {
      console.log(err)
      res.sendStatus(400)
    })
})

app.post("/login", (req, res) => {

  const code = req.body.code
  const spotifyApi = new SpotifyWebApi({
    redirectUri: process.env.REDIRECT_URI,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  })

  spotifyApi
    .authorizationCodeGrant(code)
    .then(data => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      })
    })
    .catch(err => {
      console.log('login', err)
      res.sendStatus(400)
    })
})

// Add this route at the end of your server.js file
app.get("/test", async (req, res) => {
  try {
    console.log('okasjd;lfkjasdlkfj;lasdkjf')
    // Use the pool to execute a simple query
    const result = await pool.query("SELECT NOW()");
    res.json({ message: "Database connection successful", timestamp: result.rows[0].now });
  } catch (error) {
    console.error("Error connecting to the database:", error);
    res.status(500).json({ error: "Database connection error" });
  }
});

app.listen(3002, () => {
  console.log('Server is running on port 3002');
});