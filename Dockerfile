FROM node:lts-gallium

WORKDIR /docs

COPY package.json package-lock.json ./
RUN npm install

COPY ./ .

EXPOSE 3000
RUN yarn build

CMD ["yarn", "serve"]