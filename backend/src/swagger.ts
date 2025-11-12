import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Zilla Backend API',
      version: '1.0.0',
      description: 'API documentation for Zilla Backend',
    },
    servers: [
      {
        url: 'http://localhost:5000',
        description: 'Development server',
      },
    ],
  },
  apis: ['./src/routes/*.ts'], // Path to your API routes
};

const specs = swaggerJsdoc(options);

export const setupSwagger = (app: Express): void => {
  app.use('/swagger', swaggerUi.serve, swaggerUi.setup(specs));
  app.get('/swagger-json', (req, res) => {
    res.json(specs);
  });
};