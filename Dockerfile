FROM node:14-alpine
WORKDIR /usr/app
COPY package.json .
COPY . .
RUN npm install
CMD node index.js