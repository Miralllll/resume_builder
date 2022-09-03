FROM node:12.18.3

WORKDIR /app

COPY package.json .
# COPY yarn.lock .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
