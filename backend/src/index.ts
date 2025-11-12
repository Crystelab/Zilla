import express from 'express';
import cors from 'cors';
import labels from './routes/labels';
import { setupSwagger } from './swagger';

const app = express();
const port = 5000;

app.use(cors());

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello from TypeScript Backend!');
});

app.use('/api', labels);

// Swagger Documentation
setupSwagger(app);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  console.log(`Swagger docs available at http://localhost:${port}/swagger`);
});