import express from 'express';
import genreRouter from './routes/genreRouter';
import popularityRouter from './routes/popularityRouter';
import swaggerUI from 'swagger-ui-express'
import swaggerDocument from '../swagger/swagger.json'
var app = express();
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/genre', genreRouter);
app.use('/popularity', popularityRouter);
export default app;