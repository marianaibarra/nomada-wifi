FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

ENV PORT=3001

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3001

CMD ["npm", "start"]
