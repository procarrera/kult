import express from 'express'
import DotEnv from "dotenv"
import cors from 'cors'

import Log from "./utils/Log"
import routes from './routes'
import dbConnection from './database/Connection'

// Loading Local Env
DotEnv.config();
const PORT = process.env.PORT || 4444
const MONGO_URL = process.env.MONGO_URL || "URI not defined"

// Connecting to MongoDB Atlas
dbConnection(MONGO_URL)

const app = express();

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(PORT, () => {
  Log(`Server Running On Port: ${PORT}`)
})