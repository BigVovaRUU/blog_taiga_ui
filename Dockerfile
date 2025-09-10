# Stage 1: Dev runtime with Angular CLI and Taiga schematics
FROM node:20-bullseye

# Install helpful OS deps
RUN apt-get update && apt-get install -y git bash curl ca-certificates && rm -rf /var/lib/apt/lists/*

# Angular CLI (pin a modern version)
RUN npm i -g @angular/cli@18

# Create workspace and scripts folders
WORKDIR /workspace

# Copy scripts
COPY scripts /scripts
RUN chmod +x /scripts/entrypoint.sh

# Copy seed templates (mounted read-only in compose as well)
COPY seed /seed

EXPOSE 4200