import aws from 'aws-sdk'
import { Request } from "express"
import multerS3 from 'multer-s3'

aws.config.update({
    secretAccessKey: 'rTLZGcnzBz6vVZVdeVPGIZLrorzJVq745mDXjB6U',
    accessKeyId: 'AKIAJABZJ7VJBOXSJEHA',
    region: 'sa-east-1'
})

const s3 = new aws.S3();

export default {
    storage: multerS3({
        s3: s3,
        bucket: 'kult-test',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: "public-read",
        key: (request: Request, file, cb) => {
            const folderName = request.params.userID
            console.log(folderName)
            const fileName = `${Date.now()}-${file.originalname}`
            const path = `${folderName}/${fileName}`
            cb(null, path)
        }
    })
}
