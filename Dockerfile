FROM node:14.16.0

WORKDIR /app

COPY . .

RUN rm .env

RUN npm i

RUN npx react-scripts build

RUN npm i -g serve

EXPOSE 8080

CMD ["serve", "-s", "build", "-l", "8080"]





#EXAMPLE PROD VERSION
#FROM registry.il2.dso.mil/platform-one/devops/pipeline-templates/base-image/harden-nodejs14:14.16.0 AS builder
#
#WORKDIR /app
#
## temporary fix until P1 adds chown capabilities or makes /home/node owned by appuser
#USER root
#RUN node -e "const fs = require('fs');  fs.chown('/home/node/', 950, 950, (error) => {console.log(error)});"
#USER 950
#
## COPY
#COPY --chown=950:950 . .
#
## install dependencies
#RUN npm i
#
## build react app
#RUN GENERATE_SOURCEMAP=false npm run build
#
## Stage 2
#FROM registry.il2.dso.mil/platform-one/devops/pipeline-templates/base-image/harden-nginx-19:1.19.2
#
#USER appuser
#
#COPY --from=builder --chown=appuser:appuser /app/build /var/www
#
#EXPOSE 8080
#
#CMD [ "nginx", "-g", "daemon off;" ]
