import { Request, Response } from 'express'
import * as Yup from 'yup'
import Post from "../database/Models/Post"

export default {

    async index(req: Request, res: Response) {

        try {
            const posts = await Post.find().populate("creator")
            return res.status(200).send(posts)
        } catch (error) {
            console.log(error)
            return res.status(400).send({ error })
        }
    },
    async create(req: Request, res: Response) {
        const { creator, section, rating, body } = req.body

        try {
            const data: any = {
                creator,
                section,
                rating,
                body
            }
            const schema = Yup.object().shape({
                creator: Yup.string().required(),
                section: Yup.string().required(),
                rating: Yup.number().required(),
                body: Yup.string().required(),
            })

            await schema.validate(data, {
                abortEarly: false,
            })

            const post = await Post.create(data)
            return res.status(201).send(post)

        } catch (error) {
            console.log(error)
            return res.status(400).json({ error })
        }
    }
}