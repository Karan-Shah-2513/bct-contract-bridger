FROM node:16-alpine
RUN mkdir -p /app
WORKDIR /app
COPY . .
RUN npm ci
EXPOSE 8080
CMD ["npm", "start"]