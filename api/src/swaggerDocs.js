/* eslint-disable linebreak-style */
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerDefinition = {
  info: {
    title: 'Free Mentors',
    version: '1.0.0',
    description: 'Free Mentors is a social initiative to provide free mentorship sessions.',
  },
};

const options = {
  swaggerDefinition,
  apis: [`${__dirname}/routes/users.js`],
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = (app) => {
  app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
