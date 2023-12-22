const express = require("express");
const colors = require("colors");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const port = 8080;

//connect db
connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/todolist", require("./routes/todoRoutes"));
app.use(errorHandler);

const PORT = 3000;

app.listen(PORT, () => {console.log(`Server started on port:http://localhost:${PORT}`)});
