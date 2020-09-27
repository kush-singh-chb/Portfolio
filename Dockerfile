FROM node:latest

RUN mkdir -p /usr/local/app
WORKDIR /usr/local/app
RUN npm install
COPY . .
EXPOSE 8080
CMD ["npm", "start"]

FROM nginx
EXPOSE 8080
COPY default.conf /etc/nginx/conf.d/