const express = require("express");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
    res.status(200).json({ api: "Server is live...", environment: process.env.DB_ENV })
});

module.exports = server;