FROM nginx:latest

# Remove default nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy React build files
COPY build /usr/share/nginx/html

# Copy custom NGINX configuration
COPY nginx.conf /etc/nginx/nginx.conf  # ✅ Copy to correct location

# Expose port 80
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]

