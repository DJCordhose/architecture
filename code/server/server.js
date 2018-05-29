var express = require("express");
var app = express();

app.get("/:greeting", function(req, res) {
    const greeting = req.params.greeting;
  res.json({ message: `${greeting}, World` });
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
