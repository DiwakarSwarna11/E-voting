require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const voterRoutes = require("./routes/voterRoutes");
const voteRoutes = require("./routes/voteRoutes");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.use("/api/voter", voterRoutes);
app.use("/api/vote", voteRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 