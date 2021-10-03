const Express = require("express");
const app = Express();
const LoginUser = require("./routes/LoginUser");
const ConnectDatabase = require("./config/connection");
const SignUpUser = require("./routes/SignUp");
const PetZone = require("./routes/CardView");
//app.use("/api/loginUser", LoginUser);

ConnectDatabase();

app.use(Express.json());
//routes
app.get("/", (request, response) => {
  response
    .status(200)
    .send("welcome to the team blackhats backend api for wildhacks");
});

app.use("/api/login", LoginUser);
app.use("/api/signup", SignUpUser);
app.use("/api/home", PetZone);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server Listening at ${PORT}`);
});
