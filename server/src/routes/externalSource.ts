const express = require("express");
const router = express.Router();
const axios = require("axios");

router.post("/", async (req, res) => {
    try {
        const {url} = req.body;

        // Make a request to the URL provided by the user
        const response = await axios.get(url);

        // Return the response from the URL to the client
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send("Request failed");
    }
});

module.exports = router;