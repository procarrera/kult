import { Request, Response, NextFunction } from 'express'
import * as Yup from 'yup'
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
    async detail(req: Request, res: Response) {
        const { userID } = req.params
        try {
            const user = await User.findById(userID)
            return res.status(200).send({ user })
        } catch (error) {
            return res.status(400).send({ error })
        }
    },

    async create(req: Request & { file: any }, res: Response) {
        const avatar_url = req.file.location
        const { name } = req.body

        // Verifies if user already exists
        const user = await User.findOne({ name })
        if (!user) {
            try {
                const data: any = { name, avatar_url }

                const schema = Yup.object().shape({
                    name: Yup.string().required(),
                    avatar_url: Yup.string().required()
                })

                await schema.validate(data, {
                    abortEarly: false,
                })
                const newUser = await User.create(data)
                return res.status(201).send(newUser)
            } catch (error) {
                console.log(error)
                return res.status(400).send({ error })
            }
        }
        return res.status(400).send({ error: "User already exists" })

    },
    async update(req: Request & { file: any }, res: Response) {
        const avatar_url = req.file.location
        const { userID } = req.params
        try {
            const user = await User.findByIdAndUpdate(userID,
                { avatar_url, $currentDate: { updated_at: true } },
                { new: true }
            );
            if (user) {
                return res.status(201).send(user)
            }
            return res.status(400).send({ error: "User not found." })
        } catch (error) {
            console.log(error)
            return res.status(400).send({ error })
        }
    },

    // async update(req: Request, res: Response) {
    //     const { avatar } = req.body
    //     try {
    //         const user = await User.findByIdAndUpdate(req.params.userID,
    //             { avatar, $currentDate: { updated_at: true } },
    //             { new: true }
    //         );
    //         if (user) {
    //             return res.status(200).send(user)
    //         }
    //         return res.status(400).send({ error: "User not found." })
    //     } catch (error) {
    //         console.log(error)
    //         return res.status(400).send({ error })
    //     }

    // },

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