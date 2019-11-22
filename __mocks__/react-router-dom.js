import React from "react";

const rrd = require("react-router-dom");

// Rendering plain div with its children
// eslint-disable-next-line react/display-name
rrd.HashRouter = ({ children }) => <div>{children}</div>;

module.exports = rrd;
