FROM node:18.12-alpine

COPY . /app

WORKDIR /app

RUN npm install --omit=dev

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]