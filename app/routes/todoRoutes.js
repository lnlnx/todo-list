const router = require("express").Router();
// const jwt = require("jsonwebtoken");
let id = 1;
const data = [
      {
        "id": "f69b",
        "content": "123"
      },
      {
        "id": "fd43",
        "content": "123123"
      },
      {
        "id": "af2b",
        "content": "123123123"
      },
      {
        "id": "9715",
        "content": "5"
      },
      {
        "id": "792f",
        "content": "6"
      },
      {
        "id": "d66d",
        "content": "7ffffff"
      },
      {
        "id": "e923",
        "content": "cbb"
      }
    ]

router.get("/", authentication,(_req, res) => {
    res.json(data);
});

router.post("/",authentication,  (req, res) => {
    const newItem = {id:id.toString(), ...req.body, }
    data.push(newItem);
    console.log(data);
    id += 1;
    res.send({result: "new todo created"});
})
function authentication(req, res, next) {
    const cookies = req.cookies;
    console.log(cookies);
    if (token == null) {
      res.status(401).send("authentication error");
      return;
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        res.status(401).send("authentication error");
        return;
      }
      req.user = user;
      next();
    });
  }
module.exports = router;
