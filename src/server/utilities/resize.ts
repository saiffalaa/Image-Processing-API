import express from 'express';
import sharp from 'sharp';

const app = express();
app.use(express.static('./server'));
const resize = async (
  path: string,
  name: string,
  width: number,
  height: number
): Promise<string> => {
  try {
    await sharp(path)
      .resize(width, height)
      .toFile(`src/server/${name}-${width}x${height}.jpg`);
    return new Promise((resolve) => resolve('success'));
  } catch (err) {
    return new Promise((_resolve, reject) => reject(`${err}`));
  }
};
export default resize;
