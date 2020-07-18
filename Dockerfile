FROM node:14.0.0-alpine AS builder
WORKDIR /usr/src/idea-directory-app
COPY app/package.json /usr/src/idea-directory-app
RUN npm cache verify \
    && npm install
ADD  app /usr/src/idea-directory-app
RUN npm run build

FROM nginx

EXPOSE 80

COPY --from=builder usr/src/idea-directory-app/build /usr/share/nginx/html
