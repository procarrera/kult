import { Request, Response } from 'express'

export default {

    async index(req: Request, res: Response) {
        res.json({ message: "ok" })
    }
}