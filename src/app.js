const express = require("express");
const cors = require("cors");
const session = require("express-session");
const store = new session.MemoryStore();

const users = require("./routes/user");
const recipes = require("./routes/recipe");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(
  session({
    secret: process.env.SECRET,
    cookie: { 
      maxAge: 86400000, 
      expires: new Date(Date.now() + 86400000), 
      sameSite: "none", 
      secure: true 
    },
    saveUninitialized: false,
    resave: true,
    store,
  })
);

app.use("/auth", users);
app.use("/recipe", recipes);

module.exports = app;