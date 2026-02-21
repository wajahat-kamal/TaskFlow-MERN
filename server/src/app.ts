import express, { Application } from 'express';
import cookieParser from 'cookie-parser';
import authRouter from './routes/auth.route.js';
import { protect } from './middlewares/protect.middleware.js';
import taskRouter from './routes/task.route.js';

const app: Application = express();

app.use(cookieParser())
app.use(express.json());

app.use("/api/auth/", authRouter)
app.use("/api/tasks/", protect, taskRouter)

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/protect', protect, (req, res) => {
    res.send('Protected Route!');
});


export default app;