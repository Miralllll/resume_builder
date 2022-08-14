
FROM ubuntu:18.04 AS development

ARG DEBIAN_FRONTEND=noninteractive

USER root

RUN apt-get update
RUN apt-get install -y \
    fonts-font-awesome \
    inkscape \
    texlive-full \
    texlive-xetex \
    unzip \
    curl \
 && apt-get clean \
 && rm -f /var/lib/apt/lists/*_dists_*

RUN rm /bin/sh && ln -s /bin/bash /bin/sh

RUN mkdir /usr/local/nvm
ENV NVM_DIR /usr/local/nvm
ENV NVM_INSTALL_PATH $NVM_DIR/versions/node/$NODE_VERSION
ENV NODE_VERSION v14.16.1
RUN curl --silent -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash

WORKDIR /usr/src/app
COPY ./ ./

RUN yarn install

RUN yarn build

COPY ./src/server.js server.js
EXPOSE 3000

CMD ["node", "server.js"]