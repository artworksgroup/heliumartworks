FROM node:19-alpine3.16

ENV NODE_VERSION 19.7.0

WORKDIR /app

COPY . /app

RUN yarn install

RUN yarn build

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]

