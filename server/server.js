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
      // console.log('login data', data.body)
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

app.post("/queue", (req, res) => {
  const uri = req.body.uri
  const spotifyApi = new SpotifyWebApi({
    redirectUri: process.env.REDIRECT_URI,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  })

  // spotifyApi.setAccessToken('BQC5ncr0AhHIsB_5qkHZNrvOY9IzkM81x57oJs8vmmYaX8lG04…i3nCXXh-AQ0s7cr9CNgTX810rYDk_jZMy_u8DtY6k9EB_Me7q')

  spotifyApi
    .addToQueue(uri)
    .then(data => {
      console.log('track added')
    })
    .catch(err => {
      console.log('addToQueue error', err)
      res.sendStatus(400)
    })
})




// Serve static files from the 'build' directory
// app.use(express.static(path.resolve(__dirname, '..', 'client', 'build')));

// Catch all route for serving the client application
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '..', 'client', 'public', 'index.html'));
// });

// Your other routes and server configuration

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});