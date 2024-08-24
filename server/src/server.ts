import app from './app';
import { env } from './utils/envConfig';

const PORT: number = env.PORT;

app.listen(PORT, () => {
    const { HOST, PORT, NODE_ENV } = env;
    console.log(`Server (${NODE_ENV}) is running on http://${HOST}:${PORT}`);
});
