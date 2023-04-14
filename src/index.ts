import express from "express";
import UserRoute from "./routes/UsersRoute";

const app = express();

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.use("/users", UserRoute);

app.listen(8080, () => {
  console.log("Listening on http://localhost:8080");
});
