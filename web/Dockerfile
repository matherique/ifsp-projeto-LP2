FROM node:12.18.4-alpine

COPY package.json /home/app/

WORKDIR /home/app/

RUN npm install

COPY . /home/app/

CMD ["npm", "run", "dev"]
