import express from 'express';
import userRouter from './routes/userRouter';
const app = express();
app.use(express.json());

export default app;
