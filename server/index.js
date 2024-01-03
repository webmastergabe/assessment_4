const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const controller = require('./controller')

app.get("/api/compliment", controller.getCompliment);
app.get("/api/fortune", controller.getFortune);
app.get("/api/number", controller.getNum);
app.get("/api/date", controller.getDate);
app.get("/api/time", controller.getTime);
app.get("/api/greet", controller.getName);

app.listen(4000, () => console.log("Server running on 4000"));
