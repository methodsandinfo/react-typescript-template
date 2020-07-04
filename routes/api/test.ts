import express from "express";
const router = express.Router();

router.get("/", async function (req, res) {
  try {
    res.json("hello");
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

module.exports = router;
