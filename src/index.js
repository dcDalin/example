import express from 'express';
import userRouter from './routes/auth';
import propertyRouter from './routes/property';

const app = express();
const port = 3000;

app.use('/api/v1/auth', userRouter);
app.use('/api/v1/property', propertyRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
