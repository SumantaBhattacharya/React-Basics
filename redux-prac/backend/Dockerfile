# https://hub.docker.com/_/node/

# Alpine Linux is much smaller than most distribution base images 
FROM node:20-alpine3.23 # less disk space.

# bcrypt is a native C++ module that requires glibc (bcrypt's .node files are compiled for glibc, not musl libc). bcrypt Wont work on Alpine (Alpine uses musl libc). 

# npm list --depth=0

ENV MONGO_INITDB_ROOT_USERNAME=delta_admin 
ENV MONGO_INITDB_ROOT_PASSWORD=delta_password

RUN mkdir -p delta/backend

COPY . /delta/backend

CMD ["node", "/delta/backend/index.js"]