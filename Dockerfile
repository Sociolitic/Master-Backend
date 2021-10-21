FROM node

WORKDIR app

COPY package*.json ./

EXPOSE 8080

RUN npm install

COPY . .

CMD ["node", "index.js"]

# CMD ["npm", "test"]