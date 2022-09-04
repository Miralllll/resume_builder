FROM node:12.22.0
WORKDIR /app 
COPY package.json /app 
COPY yarn.lock /app
RUN yarn install 
COPY . /app 
CMD npm run develop 
EXPOSE 3000