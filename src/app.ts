import express from 'express';
import routes from './Routes/carRoute';

const app = express();

app.use(express.json());
app.use(routes);

export default app;
