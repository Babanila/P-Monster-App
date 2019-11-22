# P-Monster-App

# Table of Contents

-   [Features](#features)
-   [Requirements](#requirements)
-   [Usage](#usage)

## Features

-   Get all Top Stories
-   Get individual details of story by ID
-   Sort By Date

## Requirements

Make sure you have installed all of the following prerequisites on your development machine:

-   Git - [Download & Install Git](https://git-scm.com/downloads). MacOS and Linux machines typically have this already installed.

-   Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager. Make sure to get the latest active LTS version.

-   Download the P-Monster-App from this [link](https://github.com/Babanila/P-Monster-App) or use `git clone git@github.com:Babanila/P-Monster-App.git`.

## How to start the backend server

-   Go to your terminal.
-   Locate the downloaded P-Monster-App folder.
-   Change the directory to the P-Monster-App folder(e.g `cd P-Monster-App`).
-   Run `npm install`.
-   Change the directory to the backend folder(e.g `cd backend`).
-   To start the server, run `node server.js` on your terminal.

### Usage

To run each endpoint, you need

-   A web browser
-   A running server ( e.g start server with `node server.js`).

*   Get all the top stories endpoint

    -   Enter a localhost address using port 5000 (e.g http://localhost:5000/stories)
    -   Example: `http://localhost:5000/stories`

*   Get story by ID endpoint

    -   Enter a localhost address using port 5000 (e.g http://localhost:5000/stories/single_stories/id)
    -   id represent your search parameter.
    -   Example: `http://localhost:5000/stories/single_stories/21570219`
    -   In the example above `story id = 21570219`

*   Sort stories by date endpoint

    -   Enter a localhost address using port 5000 (e.g http://localhost:5000/stories/date/start_date/end_date)
    -   Example: `http://localhost:5000/stories/date/1574235531/15742630`

### How to start the P-Monster frontend Application

-   Open computer terminal (`command-line interface`).
-   Locate the downloaded P-Monster-App folder.
-   Change the directory to the P-Monster-App folder(e.g `cd P-Monster-App`).
-   Run `npm install`.
-   Run `npm start`. (The app will start automatically)

### P-Monster-App Usage

To use P-Monster-App, follow the steps below.

### STEPS

-   After starting the app.
-   If the App doesn't start, enter the localhost address using port 8080 (`e.g http://localhost:8080`)
-   Click on any of the results to view its details.
-   View the about page etc.

### To run unit tests

-   Run `npm test`
