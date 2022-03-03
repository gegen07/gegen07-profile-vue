FROM node:15.10.0

WORKDIR /home/app

RUN apt-get -y update && apt-get install -y git

ADD package.json .

RUN npm install --save-dev
RUN npm update

EXPOSE 8080
COPY . .

CMD [ "npm", "run", "serve" ]