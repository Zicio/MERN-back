import express from 'express';
import * as dotenv from 'dotenv';
import path from 'path';
import router from './routes/index.js';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '../config/.env') });

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

const PORT = process.env.PORT || 4000;
const URL_DB =
  process.env.URL_DB ||
  'mongodb+srv://admin:TestDrive@cluster0.usesbgc.mongodb.net/?retryWrites=true&w=majority';

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}...`);
});
