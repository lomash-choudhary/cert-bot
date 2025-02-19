const express = require("express")

const app = express()

const port = 4000;

app.get("/", (req, res) => {
    res.status(200).json("Hello from cert-bot https server created by lomash hello")
})


app.listen(port, () => {
    console.log("App is listeing on port: ", port)
})