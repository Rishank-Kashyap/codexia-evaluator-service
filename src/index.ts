import express from "express";
import serverConfig from "./config/server.config.js";
const app = express();

app.listen(serverConfig.PORT, () => {
  console.log(`Server is running at ${serverConfig.PORT}`);
});
