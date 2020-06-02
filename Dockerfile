FROM node:14.0.0-alpine
WORKDIR /usr/src/idea-directory
COPY app/package.json /usr/src/idea-directory
ADD  app /usr/src/idea-directory
RUN npm install
CMD ["npm", "start"]