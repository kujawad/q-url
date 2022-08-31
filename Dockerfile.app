FROM nginx:stable-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY ./dist/q-url /usr/share/nginx/html
