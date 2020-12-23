import Mongoose from "mongoose"

const FeedSchema = new Mongoose.Schema({
    owner: {
        type: Mongoose.Types.ObjectId,
        required: true
    },
    post: {
        type: Mongoose.Types.ObjectId,
        required: true
    }
});

module.exports = Mongoose.model("Feed", FeedSchema);