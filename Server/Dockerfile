FROM node:latest
# creating a source file for the code to reside on
RUN mkdir -p Server
#Setting up the workdir
WORKDIR /Server
# Copy the contents of package.json and package-lock.json
COPY package.json .
# RUN npm install to install dependencies
RUN npm install
#Copy Source files
COPY . .
# exposing port 8000 for API
EXPOSE 5000
CMD ["node","server.js"]


