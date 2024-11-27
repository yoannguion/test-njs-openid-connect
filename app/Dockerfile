# Base image
FROM node:22-alpine

# Set the working directory
WORKDIR /app

# Copy application files
COPY app.js .

# Install dependencies
RUN npm install express jsonwebtoken

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["node", "app.js"]