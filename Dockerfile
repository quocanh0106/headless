FROM node:18-slim

WORKDIR /app

COPY package.json /app/package.json

RUN npm install

ADD . .

CMD ["npm", "run", "start"]

