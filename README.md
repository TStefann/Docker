
# Node.js, React, MongoDB and Cypress Development and Testing environment with Docker

This project is a Dockerized full-stack web application that uses **Node.js** for the backend, **React** for the frontend, **MongoDB** as the database and **Cypress** as e2e library. The purpose of this project is to create a fully containerized development and testing environment, where you can run a single command to get it up and running.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Getting Started](#getting-started)
  - [1. Clone the repository](#1-clone-the-repository)
  - [2. Run the application](#3-run-the-application)
  - [3. Access the application](#4-access-the-application)
- [Volumes and Mounts](#volumes-and-mounts)
- [Stopping and Restarting Containers](#stopping-and-restarting-containers)
- [Run Cypress tests](#run-cypress-tests)

## Features

- Fullstack setup: React frontend, Node.js backend, and MongoDB database and Cypress as e2e framework
- Data persistence using Docker volumes, ensuring data is not lost when containers are stopped.
- Hot-reloading through mount binding, reflecting any code changes without needing to rebuild containers.
- Simple orchestration using `docker-compose`.

## Requirements

Before you can run this project, ensure you have the following installed:

- **Docker**: [Install Docker](https://docs.docker.com/get-docker/)
- **Docker Compose**: Comes bundled with Docker Desktop or install it separately.

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/TStefann/Docker.git
```

### 2. Run the application

Once everything is set up, you can bring up the entire stack using Docker Compose:

```bash
docker-compose up -d
```

This will start the **Node.js** server, the **React** frontend, and the **MongoDB** database.

### 3. Access the application

- Frontend: Open your browser and go to [http://localhost:3000](http://localhost:3000)
- Backend API: Go to [http://localhost:8080](http://localhost:8080)


- **Data Persistence**: The application is configured with Docker volumes to ensure your MongoDB data persists even when the container is shut down. This is defined in the `docker-compose.yml` file.
  
  ```yaml
  volumes:
     - data:/data/db
  ```

- **Code Synchronization**: Mount binding is used to sync your local code with the container, so changes made to your local files are reflected inside the container without needing a rebuild.

  For example:

  ```yaml
  volumes:
    - ./backend:/app
    - ./frontend/src:/app/src
  ```
  
## Stopping and Restarting Containers

To stop the containers, run:

```bash
docker-compose down
```

To bring the containers back up again:

```bash
docker-compose up
```

To remove all containers, volumes, and networks, use:

```bash
docker-compose down --volumes
```

## Run Cypress tests 

```bash
docker run --rm --network host  -it -v ./e2e:/e2e -w /e2e cypress/included 
```
This will mount the host directory e2e/cypress and the file e2e/cypress.config.js as volumes within the container. This means that:
1. anything that Cypress writes to these folders (e.g., screenshots,
 videos) appears also on the Docker host's filesystem
2. any change that the developer applies to Cypress files on the host
machine immediately takes effect within the e2e container (no docker
rebuild required).

