FROM node:slim

// create user

ADD package.json .
RUN npm install

ENTRYPOINT index.js

EXPOSE 3000
