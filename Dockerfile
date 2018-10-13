FROM nginx:stable-alpine
LABEL author="Michal Piekarz"
COPY ./dist/tacos-ui /var/www
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80 443
ENTRYPOINT ["nginx","-g","daemon off;"]
