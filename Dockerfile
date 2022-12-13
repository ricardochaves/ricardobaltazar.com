FROM node:19-alpine3.16

RUN npm install -g gatsby-cli@5.2.0

RUN apk update
RUN apk add --update --repository https://dl-3.alpinelinux.org/alpine/edge/testing vips-tools vips-dev fftw-dev gcc g++ make libc6-compat
RUN apk add git
RUN apk add --update --no-cache python3
RUN rm -rf /var/cache/apk/*

WORKDIR /app

COPY . .