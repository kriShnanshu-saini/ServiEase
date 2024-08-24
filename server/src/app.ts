import express, { Express, Request, Response, urlencoded } from 'express';
import cors from 'cors';
import { env } from './utils/envConfig';

const app: Express = express();

// Set the application to trust the reverse proxy
app.set('trust proxy', true);
app.use(
	cors({
		origin: env.CORS_ORIGIN,
		credentials: true,
	})
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => res.json({ message: 'Express + TypeScript setup successfully' }));

export default app;
