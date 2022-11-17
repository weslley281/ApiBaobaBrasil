import express from 'express';
import { usersRoutes } from './routes/users.routes';
import swaggerUi from 'swagger-ui-express';

import swaggerFile from './swagger.json';
import { createTableUser, userModel } from './database/models/usersModel';
import { connection, createConnectionDataBase } from './database/db';

createConnectionDataBase(connection);
createTableUser(userModel);

const app = express();

app.use(express.json());

app.use('/users', usersRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

export { app };
