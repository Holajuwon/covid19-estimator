import express from 'express';
import fs from 'fs';
import path from 'path';

const router = express.Router();

router.get('/', (req, res) => {
  const filePath = path.resolve('./src/utils/logger.txt');

  try {
    const data = fs.readFileSync(filePath, 'utf8');
    res.set({ 'Content-type': 'text/plain' }).send(data);
  } catch (e) {
    res.send('Error:', e.stack);
  }
});

export default router;
