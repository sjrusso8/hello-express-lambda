'use strict'
const express = require('express')
const app = express();

/**
 * GET /api .
 */
app.get('/', (req, res) => {
    res.json({
        app: "hello-express-lambda",
        apiVersion: "1.0.0"
    });
});

app.get('/homepage', (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
});

// app.listen(3000, () => {
//     console.log(`Example app listening at http://localhost:3000`)
// })

module.exports = app // export your app so aws-serverless-express can use it