const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("User List");
});

router.get("/new", (req, res) => {
  res.send("User New Form");
});

router.post("/", (req, res) => {
  res.send("Created User");
});

router
  .route("/:id")
  .get((req, res) => {
    res.send(`User user with id ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update user with id ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete user with id ${req.params.id}`);
  });

router.param("id", (req, res, next, id) => {
  console.log(id);
  next();
});
// router.get("/:id", (req, res) => {
//   res.send(`User user with id ${req.params.id}`);
// });

// router.put("/:id", (req, res) => {
//   res.send(`Update user with id ${req.params.id}`);
// });

// router.delete("/:id", (req, res) => {
//   res.send(`Delete user with id ${req.params.id}`);
// });
module.exports = router;
