const express = require("express");
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");

const teacherRouter = require("./routes/teacher");
const parentsRouter = require("./routes/parents");

const app = express();

// routes & middlewares
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/teacher", teacherRouter);
app.use("/api/parents", parentsRouter);

//DB setup
mongoose.set("strictQuery", false);
const connectDatabase = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
    })
    .then(() => console.log("Database connected successfully"))
    .catch((err) => console.log("Error connecting to mongodb", err));
};
connectDatabase();

//server setup
const port = process.env.PORT || 6001;
app.listen(port, () => console.log(`Server running at port ${port}`));
