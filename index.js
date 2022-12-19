const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cookieParser());

app.get("/", (req, res) => {
  return res
    .cookie("access_token", "asdfasdfasdf", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    })
    .status(200)
    .json({ message: "👌" });
});

const start = (port) => {
  try {
    app.listen(port, () => {
      console.log(`Api up and running at: http://localhost:${port}`);
    });
  } catch (error) {
    console.error(error);
    process.exit();
  }
};
start(3333);
