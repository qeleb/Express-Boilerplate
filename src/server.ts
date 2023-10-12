import express from 'express';
import { PORT } from '@/config';

export const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

if (import.meta.env.PROD) app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));
