const validator = require("validator");

const validateUser = (req, res, next) => {
  const { name, idNo, branch, year, gender, email, password, confirmPassword } = req.body;

  if (!name || !idNo || !branch || !year || !gender || !email || !password || !confirmPassword) {
    return res.status(400).json({ error: "All fields are required" });
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ error: "Passwords do not match" });
  }

  next();
};

module.exports = validateUser;
