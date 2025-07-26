FROM node:22.1.0

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

COPY start.sh /app/start.sh
RUN chmod +x /app/start.sh

EXPOSE 3000

CMD ["npm", "run", "dev"]
