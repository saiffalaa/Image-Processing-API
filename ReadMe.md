# Image-Processing-API

## scripts needed

1.to run prettier :npm run prettier\
 to run prettier on js :npm run prettierjs
2.to lint : npm run lint\
3.to compile to js: npm run build\
4.to test: npm run test\
5.to start server with nodemon:npm run start\
6.start server with js :node build/server/app.js

## Endpoints is the name of pictures

### Examples

1./api/?name=encenadaport.jpg\
2./api/?name=fjord.jpg\
3./api/?name=icelandwaterfall.jpg\
4./api/?name=palmtunnel.jpg\
5./api/?name=santamonica.jpg\
6./api/?name=fjord.jpg&height=1000&width=1000\
7./api/?name=santamonica.jpg&height=1000&width=1000

## Other

If the name of image written without dimenstion or the dimensions written wrong it will render with it's original dimensions, if the path was wrong,name is wrong or the resizing fail it will show an error
