const router = require("express").Router();

router.post("/", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(404).json({ error: "Credentials required" });
  }

  if (username !== "abhishek@gmail.com" || password !== "Pas123") {
    return res.status(400).json({ error: "Invalid credentials" });
  }

  return res.status(200).json({ success: true });
});

module.exports = router;
