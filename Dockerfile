FROM node:latest

WORKDIR /home/app

RUN apt-get -y update && apt-get install -y git

COPY . .
RUN npm install

EXPOSE 8080

CMD [ "npm", "run", "serve" ]