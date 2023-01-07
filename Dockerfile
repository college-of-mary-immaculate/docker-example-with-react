FROM node:18-alpine

COPY . /app
WORKDIR /app
RUN npm install
RUN npm install -g serve
RUN npm run build
EXPOSE 80

CMD [ "serve", "-p", "80", "build" ]
