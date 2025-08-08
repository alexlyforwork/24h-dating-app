console.log("✅ app.js loaded");
import app from "./app.js";
import dotenv from "dotenv";

dotenv.config({ override: true });

const port = process.env.PORT || 3000;

console.log("Starting server...");

app.listen(port, () => {
  console.log("Server is running on http://localhost:" + port);
});
