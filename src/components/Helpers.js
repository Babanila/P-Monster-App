/**
 * This file contains the helper functions used in the App
 *  timeConverter used in the Output.js and StoryDetails.js files.
 */

// Timestamp converter
export const timeConverter = time => {
    // Will display time in UTC format (Sun, 17 Nov 2019 18:36:31 GMT)
    return new Date(time * 1000).toUTCString();
};
