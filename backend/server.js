const express = require("express");
const mongoose = require("mongoose");
const config = require("config");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Instantiation of MongoDB database
const db = config.get("mongoURI");

mongoose
    .connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    }) // Adding new mongo url parser
    .then(() => console.log("MongoDB Connected..."))
    .catch(err => console.log(err));

// Creation of stories routes
app.use("/stories", require("./routes/stories"));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
