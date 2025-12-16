# Development image for Next.js
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy package files first (for caching)
COPY package*.json ./

# Install all dependencies (not production-only)
RUN npm install

# Copy app source
COPY . .

# Expose port
EXPOSE 3000

# Use development server
CMD ["npm", "run", "dev"]
#  npm install -g ngrokdocker run -it --rm -v ${PWD}:/app -w /app node:22-alpine