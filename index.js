//hamzamain/traveler-server-62-5
//https://traveler-server-62-5.vercel.app
/* https://vercel.com/hamzamain/traveler-server-62-5/2k88kKhui1ZAntB
6b7yiSCkWDEQy */

const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("traveler-site-62.5 server is running");
});

app.listen(port, () => {
  console.log("traveler-site-62.5 server is running on port: ", port);
});
