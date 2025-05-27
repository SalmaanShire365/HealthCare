# Use official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package files and install deps
COPY package*.json ./
RUN npm install

# Copy all source files
COPY . .

# Expose port 3000
EXPOSE 3000

# Start Next.js dev server
CMD ["npm", "run", "dev"]

