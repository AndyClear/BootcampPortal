FROM node:7


RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install
COPY . /user/src/app

CMD ["npm", "start"]  

