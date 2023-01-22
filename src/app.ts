import express from 'express';
import carRoutes from './Routes/carRoute';
import MotorcycleRoutes from './Routes/motorcycleRoute';

const app = express();

app.use(express.json());
app.use(carRoutes);
app.use(MotorcycleRoutes);

export default app;
