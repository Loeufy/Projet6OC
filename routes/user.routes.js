// appel de express
const express = require("express");
const router = express.Router();
const raterLimit = require("express-rate-limit");
// limitation de requete
const limiter = raterLimit({
  windowMs: 5 * 60 * 1000, 
  max: 50, 
});

const userCtrl = require("../controllers/user");
// intercepte les requetes post d'inscription
router.post("/signup", userCtrl.signup);
// intercepte les requetes post d'authentification
router.post("/login", limiter, userCtrl.login);
// on exporte router
module.exports = router;
