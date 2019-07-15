FROM node:latest
# creating and setting the working directory
RUN mkdir -p Client
WORKDIR /Client
# Copy the contents of package.json and package-lock.json
COPY ["package.json","./"]
# RUN npm install to install dependencies
RUN npm install
#Copy Source files
COPY . .
EXPOSE 3000
CMD ["yarn","start"]






