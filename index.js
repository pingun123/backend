const express from "express";
const db from "./config/config.js";
const lokerRoutes from "./routes/lokerRoutes.js ";
const pelamarRoutes from "./routes/pelamarRoutes.js";
const cors from "cors";
const path from "path"
const app = express();

try {
    await db.authenticate();
    console.log('Database Connected...');

} catch (error) {
    console.error('Connection error: ', error);

}

app.use(cors());
app.use(express.json());
app.use('/lokers', lokerRoutes);
app.use('/pelamars', pelamarRoutes);
app.use("/files", express.static(path.dirname(__dirname)))
app.listen(5000, () => console.log('Server running port 5000'));

// module.exports = { index };