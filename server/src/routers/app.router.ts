import { Router, type Request, type Response } from 'express';

const appRouter = Router();

appRouter.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Hello ServiEase!' });
});

export default appRouter;
