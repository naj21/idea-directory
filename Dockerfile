FROM node:14.0.0-alpine
WORKDIR /usr/src/idea-directory-app
COPY app/package.json /usr/src/idea-directory-app
RUN npm cache verify \
    && npm install
ADD  app /usr/src/idea-directory-app

CMD ["npm", "run", "build"]