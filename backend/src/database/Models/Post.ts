import Mongoose from "mongoose"

const PostSchema = new Mongoose.Schema({
    // Own by the user
    creator: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    section: {
        type: String
    },
    rating: {
        type: Number
    },
    body: {
        type: String
    },
    created: {
        type: Date,
        default: Date.now,
        immutable: true,
    },
});

export default Mongoose.model("Post", PostSchema);