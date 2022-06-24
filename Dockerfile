FROM node:18-alpine AS build
WORKDIR /app
COPY . .
RUN npm install
CMD npm run build
