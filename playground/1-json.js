const fs = require("fs");
const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = JSON.parse(dataBuffer);
dataJSON.name = "Nicolas";
dataJSON.age = 20;
const strigifyJSON = JSON.stringify(dataJSON);
fs.writeFileSync("1-json.json", strigifyJSON);
