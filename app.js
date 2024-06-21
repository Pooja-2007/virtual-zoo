import express from "express";
import cors from "cors";
import { connectDB } from "./db/connectDB.js";
import { home, about, contact , login, register } from "./controllers/controller.js";

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 4000;

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", home);

app.get('/about', about);

app.post('/contact', contact);
app.post('/login', login);
app.post('/register', register);
