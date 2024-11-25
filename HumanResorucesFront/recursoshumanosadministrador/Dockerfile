FROM node:18 AS builder
# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app
# Copy the package.json and package-lock.json files
COPY package*.json ./
# Install the dependencies
RUN npm install
# Copy the app files
COPY . .
# Build the app
RUN npm run build
# Expose the port
EXPOSE 3000
# Run the app
CMD ["npm", "run", "dev"]
