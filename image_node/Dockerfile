FROM node:14.16.1
# Create app directory
RUN npm install nodemon -g
RUN npm install sequelize-cli -g
RUN npm install pm2 -g
RUN npm install gm -g
RUN apt-get update

RUN apt-get install -y nginx

# install Nano
RUN apt-get install -y nano

# install iputils-ping
RUN apt-get install -y iputils-ping

# install net-tools
RUN apt-get install -y net-tools

RUN apt-get install -y graphicsmagick

# Replace shell with bash so we can source files
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

RUN wget --quiet https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh -O /usr/sbin/wait-for-it.sh 
run chmod +x /usr/sbin/wait-for-it.sh
WORKDIR /opt/app