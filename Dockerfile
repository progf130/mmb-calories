FROM node:lts-alpine3.19
RUN npm install -g npm@10.8.1
RUN mkdir -p /var/services/calories
WORKDIR /var/services/calories
ADD . /var/services/calories
RUN npm install
CMD npm run build && npm run start:dev