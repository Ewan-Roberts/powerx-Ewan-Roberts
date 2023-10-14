import express, { Express } from 'express';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { postReading, getReading } from './src/data_access_layer';
import application_layer from './src/application_layer'
import data_access_layer from './src/data_access_layer'
import bodyParser from 'body-parser'

dotenv.config();

const PORT = process.env.PORT || 3000;
const app: Express = express();

app.use(helmet());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded())

app.post('/data', async (req, res) => {
  const result = await application_layer.post(req.body);

  return res.json(result);
});

app.get('/data', async (req: any, res) => {
  // TODO if no query impliment get average power reading

  const result = await application_layer.get(req.query.from, req.query.to);

  return res.json({ result });
});

app.listen(PORT, () => console.log(`Running on port ${PORT} ⚡`));
