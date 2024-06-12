# Use node image if no DB setup is added to Docker, otherwise use ubuntu:latest for PostgreSQL
FROM node:14-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to container
COPY . .

# Expose port 3000 (or your desired port)
EXPOSE 3000

# Command to run the application
CMD ["npm", "run", "start:dev"]
