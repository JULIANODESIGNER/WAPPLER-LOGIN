FROM node:lts-alpine

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

ARG PORT=3000
ENV PORT $PORT
EXPOSE $PORT

RUN mkdir /opt/node_app
ENV PATH /opt/node_app/node_modules/.bin:$PATH

WORKDIR /opt/node_app

COPY package.json ./

RUN npm install --no-package-lock

COPY . .

CMD [ "node", "./index.js" ]
