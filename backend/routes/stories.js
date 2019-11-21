/*
Hacker news api for recent top stories: https://hacker-news.firebaseio.com/v0/topstories.json
Get article details: https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty
Hacker news api documentation: https://github.com/HackerNews/API
*/

const express = require("express");
const axios = require("axios");
const Story = require("../models/Story");
const router = express.Router();

// Get all Stories
async function getStories() {
    const baseUrl = "https://hacker-news.firebaseio.com/v0/";
    const topStories = `${baseUrl}topstories.json`;

    const { data } = await axios.get(topStories);
    const newsIds = data;

    const localDB = [];
    for (let index = 0; index < 20; index++) {
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

// Get the stories based on date using timestamp format e.g 1574103626;
router.get("/date/:start_date/:end_date", async (req, res) => {
    const { start_date, end_date } = req.params;
    try {
        const result = await Story.find()
            .sort({ time: -1 })
            .where("time")
            .gte(start_date)
            .lte(end_date);
        res.send(result);
    } catch (e) {
        console.log(e);
    }
});

// Get the stories based on id (example id = 21596953;)
router.get("/single_story/:id", async (req, res) => {
    const singleId = req.params.id;
    try {
        const result = await Story.find({ id: singleId });
        res.send(result);
    } catch (e) {
        console.log(e);
    }
});

// Save to MongoDB database
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
