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
const pool = require('./models/db');


app.post('/users', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const query = `
      INSERT INTO users (username, email, password)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;
    const result = await pool.query(query, [username, email, password]);

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Error registering user' });
  }
});

app.get('/users', async (req, res) => {

  try {
    const { username, password } = req.query;
    const query = `
      SELECT * FROM users WHERE username = $1 AND password = $2;
    `;
    const result = await pool.query(query, [username, password]);

    if (result.rows.length === 1) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error getting user:', error);
    res.status(500).json({ error: 'Error getting user' });
  }
});

app.post('/tracks', async (req, res) => {
  try {
    const { spotify_id, response } = req.body;
    const query = `
      INSERT INTO tracks (spotify_id, response)
      VALUES ($1, $2)
      RETURNING *;
    `;
    const result = await pool.query(query, [spotify_id, response]);
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error posting track:', error);
    res.status(500).json({ error: 'Error posting track' });
  }
});
















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

app.listen(3002, () => {
  console.log('Server is running on port 3002');
});