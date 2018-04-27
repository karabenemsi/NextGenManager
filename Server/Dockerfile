FROM node:carbon

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

EXPOSE 3000

# Set Environment

#ENV USER_NAME="DU Benutzer"
#ENV USER_PASSWORD="1234"
#ENV PORT=3000
#ENV HOST="0.0.0.0"
#ENV NODE_ENV="staging"
ENV MONGODB_USER="" 
ENV MONGODB_PASS=""
ENV MONGODB_HOST="mongodb"
ENV MONGODB_PORT=27017

CMD [ "npm", "start" ]