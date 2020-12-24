import aws from 'aws-sdk'
import multer from 'multer'
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
        key: (request, file, cb) => {
            const fileName = `${Date.now()}-${file.originalname}`
            cb(null, fileName)
        }
    })
}
