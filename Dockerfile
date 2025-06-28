FROM node:latest


WORKDIR /app

COPY . /app

RUN npm install && npm install express && npm install mysql2 



EXPOSE 3000

CMD ["node" , "app.js"]


