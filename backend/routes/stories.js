/*
Hacker news api for recent top stories: https://hacker-news.firebaseio.com/v0/topstories.json
Get article details: https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty
Hacker news api documentation: https://github.com/HackerNews/API
*/

const express = require("express");
const axios = require("axios");
const Story = require("../models/Story");
const router = express.Router();

async function getStories() {
    const baseUrl = "https://hacker-news.firebaseio.com/v0/";
    const topStories = `${baseUrl}topstories.json`;

    const { data } = await axios.get(topStories);
    const newsIds = data;

    const localDB = [];
    for (let index = 0; index < 10; index++) {
        const topStory = `${baseUrl}item/${newsIds[index]}.json`;
        const response = await axios.get(topStory);
        localDB.push(response.data);
        console.log(localDB);
    }

    return localDB;
}

// Get all the top stories
router.get("/", async (req, res) => {
    try {
        const result = await Story.find().sort({ id: -1 });
        res.send(result);
    } catch (e) {
        console.log(e);
    }
});

// Get the stories based on date
router.get("/:date", async (req, res) => {
    const queryDate = req.params.date; // example 1574103626;
    try {
        // const arr = await Movie.find({ year: { $gte: 1980, $lte: 1989 } });
        // const result = await Story.find({ time: { $gte: queryDate, $lte: 1989 } });
        const result = await Story.find()
            .sort({ time: -1 })
            .where("time")
            .gte(queryDate);
        res.send(result);
    } catch (e) {
        console.log(e);
    }
});

// Save to the MongoDB database
router.post("/", async (req, res) => {
    const result = await getStories();
    result.forEach(item => {
        const newStory = new Story(item);
        newStory
            .save()
            .then(() => console.log("Story saved"))
            .catch(e => console.log("Error:", e));
    });
    res.status(201).send({ message: "All stories are saved" });
});

module.exports = router;
