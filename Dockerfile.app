FROM node:gallium-alpine3.16 as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
FROM nginx:stable-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/q-url /usr/share/nginx/html
