import Mongoose from "mongoose"

const UserSchema = new Mongoose.Schema({
    name: {
        type: String,
        default: "no-name",
    },
    avatar_url: {
        type: String,
        default: "https://localhost:3333/image",
        required: true
    },
    created: {
        type: Date,
        default: Date.now,
        immutable: true,
        required: true,
    },
    updated_at: {
        type: Date,
        default: Date.now,
        required: true,
    },
});

export default Mongoose.model("User", UserSchema);