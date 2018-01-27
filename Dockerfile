FROM node:latest

WORKDIR /conta-azul

COPY . /conta-azul

RUN yarn install

CMD npm run prod