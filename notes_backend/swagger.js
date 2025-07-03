const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Notes API',
      version: '1.0.0',
      description: 'RESTful API for a simple Notes application, allowing create, read, update, and delete operations on notes.',
    },
    components: {
      schemas: {
        Note: {
          type: 'object',
          properties: {
            id: { type: 'integer', example: 1 },
            title: { type: 'string', example: 'Sample Title' },
            content: { type: 'string', example: 'My note content...' },
            created_at: { type: 'string', format: 'date-time', example: '2023-06-30T12:40:00Z' },
            updated_at: { type: 'string', format: 'date-time', example: '2023-06-30T13:00:00Z' },
          },
        },
      },
    },
  },
  apis: ['./src/routes/*.js'], // Path to the API docs
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
