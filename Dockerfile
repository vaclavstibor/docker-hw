FROM node:18-alpine

RUN mkdir /app

WORKDIR /app

COPY package.json ./

COPY package-lock.json ./

RUN npm install

COPY . ./

CMD [ "npm", "start" ]