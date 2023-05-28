# Build dependencies
FROM node:16-alpine3.15 as dependencies
WORKDIR /app
COPY package.json .
COPY . . 
RUN npm i
EXPOSE 8080
CMD npm run start