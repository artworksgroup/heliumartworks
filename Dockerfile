FROM alpine:3.16

ENV NODE_VERSION 19.7.0

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile --production


