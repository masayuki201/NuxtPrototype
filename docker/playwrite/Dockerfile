FROM mcr.microsoft.com/playwright:v1.30.0-focal

RUN apt-get update \
 && npm i -g yarn\
 && npx playwright install msedge

WORKDIR /var/www/app
