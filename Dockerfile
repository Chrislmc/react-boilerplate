FROM node:22-alpine3.19

WORKDIR /app

COPY package.json .

COPY public/locales .

RUN npm install

RUN npm i -g serve

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "serve", "-s", "dist" ]
