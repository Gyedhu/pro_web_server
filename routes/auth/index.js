const { Router } = require("express");

const router = Router();

router.post("/get-user-data", (req, res) => {
  // const { uid } = req.body;
  // process ....
  res.json("userdata");
});

router.post("/register", (req, res) => {
  // const { uid, email, name } = req.body;
  // process ....
  res.json("Account created successfully");
});

module.exports = router;
