FROM node:14-alpine AS builder

ARG BASE_URL=https://octopus-backend-g4ohfsy77-abdulberk.vercel.app


# Add a work directory
WORKDIR /app

COPY package.json .

RUN yarn install

COPY . /app/

RUN yarn build

FROM nginx:alpine


WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*

COPY --from=builder /app/dist .

COPY .nginx/nginx.conf /etc/nginx/conf.d/default.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]