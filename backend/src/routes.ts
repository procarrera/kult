import { Router } from 'express'
import multer from 'multer'
import uploadConfig from './config/s3_storage'

import FeedController from "./controllers/FeedController"
import PostController from './controllers/PostController'
import UserController from './controllers/UserController'

const routes = Router()
const upload = multer(uploadConfig)

routes.get("/", (req, res) => {
    res.send({ "welcome": "welcome to our Backend" })
})
routes.get("/users", UserController.index)
routes.get("/user/:userID", UserController.detail)
routes.post("/user", upload.single('avatar'), UserController.create)
routes.put("/user/:userID", upload.single('avatar'), UserController.update)
routes.delete("/user/:userID", UserController.delete)

routes.post("/post", PostController.create)
routes.get("/posts", PostController.index)

routes.get('/feed', FeedController.index)

export default routes;