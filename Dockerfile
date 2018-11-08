FROM node:8 as bundle

COPY . .

ENV ENV=production
ENV NODE_ENV=development
ENV PORT=8080

RUN npm i
CMD [ "npm", "start" ]