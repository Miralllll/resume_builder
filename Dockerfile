
FROM node:12.18.3

LABEL version="1.0"
LABEL description="This is the base docker image for frontend react app."

WORKDIR /app

COPY ["package.json", "yarn.lock", "./"]

# RUN npm install --production

COPY . .

EXPOSE 3010


CMD ["yarn", "start"]