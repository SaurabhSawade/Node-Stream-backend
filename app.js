import express from 'express';
import { createReadStream, statSync } from 'fs';
import {readFileSync} from 'fs';
import {dirname} from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';




const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(cors());


app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.use(express.static(`${__dirname}/public`));
app.get('/video', (req, res) => {
  // const filePath = readFileSync(`${__dirname}/public/video.mp4`);
  const filePath = `${__dirname}/public/video.mp4`;
  const stat = statSync(filePath);
  const fileSize = stat.size;

  const range = req.headers.range;
  if (!range) {
    res.status(416).send('Range header is required');
    return;
  }
  const chunksize = 10 ** 6; // 1MB
  const start = Number(range.replace(/\D/g, ''));
  const end = Math.min(start + chunksize, fileSize - 1);

  const header = {
    'Content-Range': `bytes ${start}-${end}/${fileSize}`,
    'Accept-Ranges': 'bytes',
    'Content-Length': end - start + 1,
    'Content-Type': 'video/mp4',
  };
  res.writeHead(206, header);
  const fileStream = createReadStream(filePath,{
    start,
    end
  })
  fileStream.pipe(res);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
export default app;