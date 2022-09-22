FROM node:alpine
WORKDIR /app
COPY package*.json .
RUN npm i --force
COPY . .
EXPOSE 3000
CMD ["npm", "start"]