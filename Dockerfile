FROM node:14.0.0-alpine
WORKDIR /usr/src/idea-directory
COPY public-idea-list/package.json /usr/src/idea-directory
ADD  public-idea-list /usr/src/idea-directory
RUN npm install
CMD ["npm", "start"]