const router = require("express").Router();
const jwt = require("jsonwebtoken");
const users = [
    {
        userId: 1,
        name: "tina",
        password: "fireflies"

    }
]
router.post("/", (req, res) => {
    const { name, password } = req.body;

  const user = users.find((user) => {
    return user.name === name;
  });
  if (!user) {
    res.status(401).send("Wrong username or password");
    return;
  }
  if (user.password !== password) {
    res.status(401).send("Wrong username or password");
    return;
  }

  const accessToken = jwt.sign(
    {
      userId: user.userId,
      name: user.name,
    },
    process.env.JWT_SECRET,
  );

  res.send({ accessToken });
})

module.exports = router;

