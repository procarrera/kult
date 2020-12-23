import { Router } from 'express'

import FeedController from "./controllers/FeedController"
import PostController from './controllers/PostController'
import UserController from './controllers/UserController'

const routes = Router()

routes.get("/user", UserController.index)
routes.post("/user", UserController.create)
routes.put("/user/:userID", UserController.update)
routes.delete("/user/:userID", UserController.delete)

routes.post("/post", PostController.create)
routes.get("/post", PostController.index)

routes.get('/feed', FeedController.index)

export default routes;