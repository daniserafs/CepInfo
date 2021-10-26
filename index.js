// importing express for use
const express = require("express");
// allowing cross-origin resource sharing
const cors = require("cors");
// initializing express app
const app = express();
app.use(cors());
// looking for a local port to host our web application
const port = process.env.PORT || 4000;

// importing cep-promise for use
const cepPromise = require('cep-promise');

// send data to the front-end
app.get("/cep", async (req, res) => {
    const cepValue = req.query.value
    const response = await cepPromise(cepValue)
    return res.json(response)
})
// initializing our web-app on the selected port 
app.listen(port, () => 
console.log(`Example app listening at http://localhost:${port}`))