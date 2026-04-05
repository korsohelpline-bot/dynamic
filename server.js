const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());
app.use(express.static("public"));

const FILE = "vehicles.json";

// GET vehicles
app.get("/api/vehicles", (req, res) => {
  const data = JSON.parse(fs.readFileSync(FILE));
  res.json(data);
});

// ADD vehicle
app.post("/api/vehicles", (req, res) => {
  const vehicles = JSON.parse(fs.readFileSync(FILE));
  vehicles.push(req.body);
  fs.writeFileSync(FILE, JSON.stringify(vehicles));
  res.send("Added");
});

// DELETE vehicle
app.delete("/api/vehicles/:id", (req, res) => {
  let vehicles = JSON.parse(fs.readFileSync(FILE));
  vehicles = vehicles.filter(v => v.id != req.params.id);
  fs.writeFileSync(FILE, JSON.stringify(vehicles));
  res.send("Deleted");
});

app.listen(3000, () => console.log("Server running on port 3000"));
