FROM node:carbon

WORKDIR /app

COPY . .

RUN npm  install

RUN npm run build

RUN npm install -g http-server

RUN  

  


