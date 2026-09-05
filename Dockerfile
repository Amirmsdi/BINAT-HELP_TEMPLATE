#FROM docker.paziresh24.info/node:14.18.2-alpine
FROM node:20-alpine AS base
WORKDIR /app

COPY package.json ./ 
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

ENV PORT 3000

CMD ["npm", "start"]
