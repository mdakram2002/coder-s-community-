const express = require("express");
const PORT = process.env.PORT || 3000;

const app = express();
app.use("/", (req, res) => {
    res.send("Akram shaikh");
})

app.listen(PORT, () => {
    console.log(`Server is listen on ${PORT}`)
});