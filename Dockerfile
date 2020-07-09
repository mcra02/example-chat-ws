FROM node:12

WORKDIR /app

COPY . .

RUN yarn install
RUN yarn build

EXPOSE 80
CMD ["yarn", "start:prod"]
