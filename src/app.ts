import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import notFound from './app/middleware/notFound';
import router from './app/routes';
import cookieParser from 'cookie-parser';


const app: Application = express();

app.use(express.json());
app.use(cors({ origin: ['http://localhost:5000'] }));
app.use(cookieParser())

// application routes
app.use('/', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Farjana Islam | Bringing Pixels to Life');
});



app.use(globalErrorHandler)

//Not Found
app.use(notFound)

export default app;
