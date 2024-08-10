import mongoose, {Schema} from "mongoose";

const subscriptionSchema = new Schema({
    subscriber: {
        type: Schema.Types.ObjectId, //the person who is subcsribing
        ref: "User"
    },
    channel: {
        type: Schema.Types.ObjectId,
        ref: "User" // the one whose channel is being subcribed
    }
}, {timeseries: true})

export const Subscription = mongoose.model("Subscription", subscriptionSchema)