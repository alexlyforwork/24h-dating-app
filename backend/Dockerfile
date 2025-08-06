FROM node:22-alpine

WORKDIR /app

# Copy only the necessary files for installing dependencies
COPY package.json package-lock.json ./

RUN npm installing

COPY . .

EXPOSE 3000

CMD npm run dev