import aws from 'aws-sdk'
import { Request } from "express"
import multerS3 from 'multer-s3'
import DotEnv from "dotenv"

DotEnv.config();

aws.config.update({
    secretAccessKey: process.env.AWS_SECRET_ACCESSKEY,
    accessKeyId: process.env.AWS_ACCESS_KEYID,
    region: process.env.AWSREGION
})

const s3 = new aws.S3();

export default {
    storage: multerS3({
        s3: s3,
        bucket: process.env.AWS_BUCKETNAME || "undefined",
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: "public-read",
        key: (request: Request, file, cb) => {
            const folderName = request.params.userID
            const fileName = `${Date.now()}-${file.originalname}`
            const path = `${folderName}/${fileName}`
            cb(null, path)
        }
    })
}
