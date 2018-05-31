const express = require("express");
const app = express();
const cors = require('cors');

app.use(cors());

app.get("/menues", (req, res) => {
    res.json({menues: ['Menue1', 'Menue12']})
});

app.get("/menues/:columns", (req, res) => {
    const c = req.params.columns;
    res.json({menues: ['Menue1', c]})
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
