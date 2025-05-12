import express from 'express';
import { fileURLToPath } from 'url';
import { resolve } from 'path';
import { dirname } from 'path';
import { authRouter } from './routes/auth-router.js';
import dotenv from 'dotenv';
dotenv.config({
  path: './.env'
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3010;

app.use(express.static('static'));
app.use('/event-management/auth', authRouter)

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
