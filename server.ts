import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";
import expressSession from "express-session";
import methodOverride from "method-override";
import passport from "passport";
import express from "express";
import { Model } from "objection";

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride());
app.use(cookieParser());
app.use(
  expressSession({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: false,
  })
);

app.use("/api", require("./routes/api/test"));

app.use(express.static(path.join(__dirname, "/client/public")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/public/index.html"));
});

app.set("port", process.env.PORT || 3001);
app.listen(app.get("port"), function () {
  console.log("Express server listening on port 3001");
});

module.exports = app;
