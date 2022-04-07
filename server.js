import express from 'express';
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();
const port = 3001;
const clientUrl = "http://localhost:3001";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// !! Your middleware should not go below this line !!
// Serve frontend client/build folder

app.use(express.static(path.join(__dirname, "client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.listen(port, () => {
  console.log(`The server 🙈 is listening on port ${port}`);
  console.log(`Visit ${clientUrl} in your browser`);
});
