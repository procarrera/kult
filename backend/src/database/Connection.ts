import mongoose from 'mongoose'

export default async function dbConnection(MONGO_URL: string) {
    try {
        await mongoose.connect(MONGO_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: false,
        });
        console.log("[INFO] Connected to MongoDB")
    } catch (error) {
        console.log(error);
    }
}