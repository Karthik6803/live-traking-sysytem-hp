import express from 'express';
import { setBusRoutes } from './routes/busRoutes';
import { setStandRoutes } from './routes/standRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
setBusRoutes(app);
setStandRoutes(app);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});