FROM node:18

WORKDIR /client/

COPY package*.json yarn.lock ./
RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "dev"]
