FROM node:7


RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY UI/frontend-react/hello-world/package.json /usr/src/app/
RUN npm install

COPY /UI/frontend-react/hello-world /usr/src/app
RUN npm run build

CMD ["npm", "start"]  

