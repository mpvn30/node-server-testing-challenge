const express = require("express");

const Characters = require("../characters/charactersModel.js")

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
    res.status(200).json({ api: "Server is live...", environment: process.env.DB_ENV })
});

server.get("/characters", (req, res) => {
    Characters.getAll()
    .then(characters => {
        res.status(200).json(characters)
    })
    .catch(error => {
        res.status(500).json({error: "cannot GET Characters"})
    })
})

module.exports = server;