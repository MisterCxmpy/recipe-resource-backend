require("dotenv").config();
const fs = require("fs");
const https = require("https");
const app = require("./app");
const port = process.env.PORT;

const privateKey = fs.readFileSync("key.pem", "utf8");
const certificate = fs.readFileSync("cert.pem", "utf8");
const credentials = { key: privateKey, cert: certificate };

const httpsServer = https.createServer(credentials, app);

httpsServer.listen(port, () => {
  console.log(`HTTPS server running on port ${port}`);
});
