# Use the official Node.js image with Alpine Linux as the base image
FROM node:14-alpine

# Set the working directory within the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install
RUN npm install react-router-dom
RUN npm install react-bootstrap-icons --save
RUN npm install @lottiefiles/react-lottie-player
RUN npm install @emailjs/browser

# Copy the rest of your app's source code to the container
COPY . .

# # Build your React app (if necessary)
# RUN npm run build

# Expose the port your React app is running on
EXPOSE 3000

# Start your React app
CMD ["npm", "start"]
