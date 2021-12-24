import express from 'express';
import resize from './resize';
import fs from 'fs';

const app = express();
const port = 3001;
app.use(express.static('./src/server'));
const checkExist = (path: string): boolean => {
  if (fs.existsSync(path)) return true;
  else return false;
};
app.get('/api', async (req, res) => {
  const fileName: string = req.query.name as unknown as string;
  const fileWidth = Number(req.query?.width as unknown as number);
  const fileHeight = Number(req.query?.height as unknown as number);
  const options = { root: 'D:/runJs/src/server' };

  if (fileHeight && fileWidth) {
    if (
      checkExist(
        `D:/runJs/src/server/${fileName}-${fileWidth}x${fileHeight}.jpg`
      )
    ) {
      res.sendFile(`${fileName}-${fileWidth}x${fileHeight}.jpg`, options);
    } else {
      resize(`src/server/${fileName}`, fileName, fileWidth, fileHeight)
        .then(() => {
          res.sendFile(`${fileName}-${fileWidth}x${fileHeight}.jpg`, options);
        })
        .catch((err) => res.send(err));
    }
  } else {
    if (checkExist(`D:/runJs/src/server/${fileName}`))
      res.sendFile(`${fileName}`, options);
    else {
      res.status(400);
      res.send('File not existed');
    }
  }
});
app.listen(port, () => {
  console.log(`server started at ${port}`);
});
export default app;
