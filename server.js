const fs = require('fs');
const express = require('express');
const app = express();
const path = require('path');
const uuid = require('uuid');
var PORT = process.env.PORT || 3001;

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// routes
// Get note and send to db.json
app.get("/api/notes", (req, res) => {
    res.sendFile(path.join(__dirname, '/db/db.json'))
})

// post to add new notes to db.json
app.post("/api/notes", (req, res) => {
    const notes = JSON.parse(fs.readFileSync('./db/db.json'));
    const newNote = req.body;
    newNote.id = uuid.v4();
})