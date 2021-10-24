const express = require("express");
const session = require("express-session");
const path = require("path");
const port = process.env.port || 3001;

const app = express();
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use(
    session({
        secret: "secret", // rename  secret to secure password
        reverse: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: true,
            secure: false,
            maxAge: 24 * 60 * 60 * 1000,
        },
    })
);

// const indexRoute = require("./routes/indexRoute");
// app.use("/", indexRoute);
app.get("/", (req, res) => {
    res.render("index");
});
app.listen(port);

console.log(`Connected on port ${port}`);
