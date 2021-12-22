import db from './db/connection.js'
import routes from './routes/index.js'
import express from 'express'
import cors from 'cors'
import logger from 'morgan'


const app = express()
const PORT = process.env.PORT || 3000
//backend running on PORT 3000

app.use(express.json())
//middleware function that allows our app to parse json
app.use(cors())
//Allows validation to server to prevent cors errors
app.use("/api", routes)
//appends all of the routes in routes.js with "/api" to allow developers easily know theyre working with an API
app.use(logger("dev"))
//real-time audit trail in the terminal that logs http requests/errors while working in development

db.on("connected", () => {
  console.log("connected to mongodb")
  app.listen(PORT, () => 
    process.env.NODE_ENV === "production"
      //NODE_ENV is returned from HEROKU
      ? console.log(`express server running in production on port ${PORT}`)
      //if not localhost... probably in production
      : console.log(`express server running in development on: http://localhost:${PORT}`)
  )

})


