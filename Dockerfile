FROM node:latest

RUN mkdir -p /usr/local/app
WORKDIR /usr/local/app
RUN npm install
COPY . .
CMD ["npm", "start"]

FROM nginx
EXPOSE 80
COPY --from=0 /app/build /usr/share/nginx/html