import express, { Express } from 'express';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { postReading, getReading } from './src/dataAccessLayer';
import applicationLayer from './src/applicationLayer'
import dataAccessLayer from './src/dataAccessLayer'
import bodyParser from 'body-parser'

dotenv.config();

const PORT = process.env.PORT || 3000;
const app: Express = express();

app.use(helmet());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded())

app.post('/data', async (req, res) => {
  const result = await applicationLayer.post(req.body);

  return res.json(result);
});

app.get('/data', async (req: any, res) => {
  // TODO if no query impliment get average power reading

  const result = await applicationLayer.get(req.query.from, req.query.to);

  return res.json({ result });
});

app.listen(PORT, () => console.log(`Running on port ${PORT} ⚡`));
