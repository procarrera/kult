import { Request, Response, NextFunction } from 'express'

import User from "../database/Models/User"

export default {

    async index(req: Request, res: Response) {
        try {
            const users = await User.find()
            return res.status(200).send({ users })
        } catch (error) {
            return res.status(400).send({ error })
        }
    },

    async create(req: Request, res: Response) {
        const { name } = req.body
        const user = await User.findOne({ name })
        if (!user) {
            try {
                const user = await User.create(req.body);
                return res.status(200).json(user)
            } catch (error) {
                console.log(error)
                return res.status(400).json({ error })
            }
        }
        return res.status(400).send({ error: "User already exists" })
    },
    async update(req: Request, res: Response) {
        const { avatar } = req.body
        try {
            const user = await User.findByIdAndUpdate(req.params.userID,
                { avatar, $currentDate: { updated_at: true } },
                { new: true }
            );
            if (user) {
                return res.status(200).send(user)
            }
            return res.status(400).send({ error: "User not found." })
        } catch (error) {
            console.log(error)
            return res.status(400).send({ error })
        }

    },

    async delete(req: Request, res: Response) {
        try {
            const user = await User.findByIdAndRemove(req.params.userID);
            if (user) {
                return res.status(200).send()
            }
            return res.status(400).send({ error: "User not found." })
        } catch (error) {
            console.log(error)
            return res.status(400).send({ error })
        }
    }
}