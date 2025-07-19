import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import ConnectDb from './config/db.js'

import allRoutes from './routes/index.js';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);




// config
dotenv.config();
ConnectDb()

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware

app.use(cors({
  origin:[process.env.FRONTENDURL,process.env.ADMINFRONTENDURL],
  credentials:true
})); 
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(express.json()); // Parse JSON body

// Example route
app.use('/api',allRoutes );




// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
