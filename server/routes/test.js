const router = require("express").Router();

router.get("/", function (req,res,next) {
  res.send({ status: "ok", data: "Hello World!" });
})

module.exports = router;