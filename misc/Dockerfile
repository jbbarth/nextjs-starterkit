FROM node:10.8-alpine

RUN mkdir -p /app
WORKDIR /app

# python package is needed by grpc node module
RUN apk add --update --no-cache build-base python

COPY package.json yarn.lock /app/
RUN npm install -g yarn && yarn install

ENV NODE_ENV=production

COPY . /app
RUN yarn build

EXPOSE 3000
CMD [ "npm", "start" ]
