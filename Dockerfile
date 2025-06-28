# Use Node.js LTS base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install deps
COPY package*.json ./
RUN npm install

# Copy the rest of your code
COPY . .

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]






