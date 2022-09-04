FROM node:14.15.0
WORKDIR /app 
COPY package.json /app 
COPY yarn.lock /app
RUN yarn install 
COPY . /app 
CMD npm run develop 
EXPOSE 3000