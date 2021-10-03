const Express = require("express");
const app = Express();
const LoginUser = require("./routes/LoginUser");
const ConnectDatabase = require("./config/connection");

//app.use("/api/loginUser", LoginUser);
app.get("/", (request, response) => {
  response.send("Hello");
});
ConnectDatabase();

app.use("/", (request, respone) => {
  response
    .status(200)
    .send("welcome to the team balckhats backend api for wildhacks");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server Listening at ${PORT}`);
});
