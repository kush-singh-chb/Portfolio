FROM node:latest

RUN mkdir -p /usr/local/app
WORKDIR /usr/local/app
RUN npm install
COPY . .

EXPOSE 3000

CMD ["npm", "start"]