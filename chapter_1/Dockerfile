FROM node:22

WORKDIR /app

COPY package*.json ./

# more reliable install (fixes network + prisma issues)
RUN npm install --fetch-retries=5 --fetch-retry-mintimeout=20000 --fetch-retry-maxtimeout=120000

COPY . .

# generate prisma client after schema exists
RUN npx prisma generate

EXPOSE 5003

CMD ["node", "./src/server.js"]