FROM node:alpine as base

WORKDIR /app

COPY package*.json ./

COPY ./src* ./src

RUN npm ci

COPY ./bible ./bible/

CMD ["node", "src/server.mjs"] 