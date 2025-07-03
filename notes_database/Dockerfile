# Use official PostgreSQL image from Docker Hub
FROM postgres:15-alpine

# Set environment variables for default database and user
ENV POSTGRES_DB=notesdb
ENV POSTGRES_USER=notesuser
ENV POSTGRES_PASSWORD=notessecret

# Copy initialization script
COPY init.sql /docker-entrypoint-initdb.d/

# Expose PostgreSQL port
EXPOSE 5432
