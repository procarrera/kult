import { Request, Response, NextFunction } from 'express'

import Post from "../database/Models/Post"

export default {

    async index(req: Request, res: Response, next: NextFunction) {

        try {
            const posts = await Post.find().populate("creator")
            return res.status(200).send({ posts })
        } catch (error) {
            console.log(error)
            return res.status(400).send({ error })
        }
    },
    async create(req: Request, res: Response, next: NextFunction) {
      
        try {
            const post = await Post.create(req.body);
            return res.status(200).send(post)
        } catch (error) {
            console.log(error)
            return res.status(400).json({ error })
        }
    }
}