const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies

app.use(cors());

const mockData = {
  columns: ["ID", "Bla"],
  data: [[1, "da"], [2, "di"], [3, "do"]]
};

app.get("/menues", (req, res) => {
  res.json({ menues: ["Menue1", "Menue12"] });
});

app.get("/menues/:columns", (req, res) => {
  const c = req.params.columns;
  res.json({ menues: ["Menue1", c] });
});

app.get("/tables/:menue", (req, res) => {
  const menue = req.params.menue;
  res.json(mockData);
});


const mockUserData = {
  columns: ["Name", "Login", "Usergroup"],
  data: [["test", "test", "testgroup"], ["Christian", "CF", "attendant"], ["Oliver", "OZ", "presenter"]]
};


app.post("/searchUser", (req, res) => {
  console.log(req.body);  
  const name = req.body.name
  const login = req.body.login
  const ug = req.body.ug

  searchData = mockUserData.data.filter(entry => 
    (name == null || name == entry[0]) 
    && (login == null || login == entry[1]) 
    && (ug == null || ug == entry[2])); 
  console.log(searchData);
  res.json(searchData);
});
  
 app.listen(3000, () => console.log("Example app listening on port 3000!"));
