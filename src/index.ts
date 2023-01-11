import express from 'express';
import * as dotenv from 'dotenv';
import path from 'path';
import router from './routes/index.js';
import url from 'url';
import mongoose from 'mongoose';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '../config/.env') });

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

const PORT = process.env.PORT || 4000;
const URL_DB = process.env.URL_DB;

(async () => {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(URL_DB);
    console.log('Server connected to MongoDB');
  } catch (err) {
    return console.log('MongoDB connection error', err as Error);
  }
  await app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}...`);
  });
})();
