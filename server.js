const express = require("express");
const auth = require("./routes/auth");

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use("/auth", auth);

app.get("/", (_, res) => {
  res.json("Welcome to pro_web");
});

app.listen(PORT, () => console.log(`app listening to port ${PORT}`));
