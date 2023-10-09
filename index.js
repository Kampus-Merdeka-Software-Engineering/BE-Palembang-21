import express from "express";
import dotenv from "dotenv";
import sequelize from "./config/sequelize.js";
import userRoutes from "./routes/users.js";
import { startSequelize } from "./utils/startSequelize.js";
import bodyParser from "body-parser";
import cors from "cors";

dotenv.config();

const app = express();

// Middleware untuk mengizinkan aplikasi menerima JSON
app.use(express.json());    
app.use(bodyParser.json());
`app.use(cors({origin: 'http://localhost:5173'}));`

// Gunakan rute pengguna
app.use('/new', userRoutes);
app.use('/', userRoutes);

startSequelize(sequelize);

// Post Server
const port = process.env.PORT || 3000;

sequelize.authenticate().then(() => {
    console.log("Database connection established!");
});

app.listen(port, () => {
    console.log('server is running at port ${port}');
});
