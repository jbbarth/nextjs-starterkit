FROM node:8-alpine

RUN mkdir -p /app
WORKDIR /app

# python package is needed by grpc node module
RUN apk add --update --no-cache build-base python

COPY package.json yarn.lock /app/
RUN npm install -g yarn && yarn install

COPY . /app
RUN npm run build

EXPOSE 3000
CMD [ "npm", "start" ]
