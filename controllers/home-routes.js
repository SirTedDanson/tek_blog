const router = require("express").Router();

// homepage
router.get("/", (req, res) => {
  res.render("homepage");
});

// generate login page
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.post("/", (req, res) => {
  res.json(`User ${req.method} request received!`);
});

router.put("/", (req, res) => {
  res.json(`User ${req.method} request received!`);
});

router.delete("/", (req, res) => {
  res.json(`User ${req.method} request received!`);
});

module.exports = router;
