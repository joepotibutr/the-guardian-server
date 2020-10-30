import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors'

import articleRoute from './routes/article';
import articleListRoute from './routes/article-list';

const app = express()


app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', articleListRoute);

app.use('/article', articleRoute);

export default app
