FROM node:latest

WORKDIR /home/app

RUN apt-get -y update && apt-get install -y git

ADD package.json .

RUN npm install --save-dev
RUN npm update

EXPOSE 8080
COPY . .

CMD [ "npm", "run", "serve" ]