import  express from 'express';
import { User, Post } from "../controller/user.js";

const router = express.Router();
router.get('/',User);
router.post('/new',Post);

export default router;