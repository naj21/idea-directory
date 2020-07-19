FROM node:14.0.0-alpine
WORKDIR /usr/src/idea-directory
COPY app/package.json /usr/src/idea-directory
RUN npm install \
    && npm cache verify
ADD  app /usr/src/idea-directory
RUN npm run build \
    && npm install -g serve
CMD ["serve", "-s", "build"]
