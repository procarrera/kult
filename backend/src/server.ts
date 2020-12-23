import express from 'express'
import DotEnv from "dotenv"
import cors from 'cors'

import Log from "./utils/Log"
import routes from './routes'
import DBConnection from './database/Connection'

// Loading Local Env
DotEnv.config();
const PORT = process.env.PORT || 3333
const MONGO_URI = process.env.MONGO_URI || "URI not defined"

// Connecting to MongoDB Atlas
DBConnection(MONGO_URI)

const app = express();

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(PORT, () => {
  Log(`Server Running On Port: ${PORT}`)
})