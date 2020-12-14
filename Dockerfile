FROM node:12.16.2-alpine
LABEL maintainer="seminar-software-testing"
RUN apk update && \
    apk upgrade && \
    apk add nano git g++ gcc libgcc libstdc++ linux-headers make python && \
    apk update
RUN mkdir /app
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
CMD ["sh", "-c", "npm run staging"]
