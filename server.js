const express = require("express");

const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
});

const apiRouter = require("./routes/api");
app.use("/api", apiRouter);

if (
    process.env.NODE_ENV === "production" ||
    process.env.NODE_ENV === "staging"
) {
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname + "/client/build/index.html"));
    });
}

const port = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

