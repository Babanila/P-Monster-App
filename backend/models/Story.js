const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storySchema = new Schema({
    id: Number,
    by: String,
    descendants: Number,
    kids: { type: [Number] },
    score: Number,
    time: String,
    title: String,
    type: String,
    url: String,
});

const Story = mongoose.model("stories", storySchema);

module.exports = Story;
