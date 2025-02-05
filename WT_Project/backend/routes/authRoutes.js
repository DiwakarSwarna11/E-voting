const express = require("express");
const { registerUser,candidateUser } = require("../controllers/authController");
const validateUser = require("../middleware/validateUser");

const router = express.Router();

router.post("/register", registerUser);
router.post("/candidate", candidateUser);

module.exports = router;
