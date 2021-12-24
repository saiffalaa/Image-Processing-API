import resize from '../server/resize';

it('expects asyncFun to resolve', async () => {
  return resize(
    'D:/runJs/src/server/encenadaport.jpg',
    'encenadaport.jpg',
    200,
    320
  ).then((result) => {
    expect(result).toEqual('success');
  });
});

it('expects asyncFun to reject', async () => {
  return resize(
    'D:/runJs/src/server/encenadaportt.jpg',
    'encenadaport.jpg',
    200,
    320
  )
    .then((result) => {
      expect(result).toEqual('Error: Input file is missing');
    })
    .catch((err) => expect(err).toEqual('Error: Input file is missing'));
});
