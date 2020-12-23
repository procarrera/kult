import mongoose from 'mongoose'

export default async function DBConnection(MONGO_URI: string) {
    try {
        await mongoose.connect(MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: false,
        });
        console.log("[INFO] Connected to MongoDB")
    } catch (error) {
        console.log(error);
    }
}