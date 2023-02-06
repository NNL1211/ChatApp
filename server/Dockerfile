FROM node:16-slim

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app


WORKDIR /home/node/app

COPY ["package.json", "package-lock.json*", "./"]

USER root

RUN npm install


COPY --chown=node:node . .

EXPOSE 8000

RUN addgroup -g 20 appgroup
RUN adduser -D -u 501 appuser -G appgroup
RUN chown -R appuser:appgroup /app

CMD [ "node", "index.js" ]

