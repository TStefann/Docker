
# My Fullstack Application

This project is a Dockerized full-stack web application that uses **Node.js** for the backend, **React** for the frontend, and **MongoDB** as the database. The application is fully containerized, and you only need to run a single command to get it up and running.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Getting Started](#getting-started)
  - [1. Clone the repository](#1-clone-the-repository)
  - [2. Set up environment variables](#2-set-up-environment-variables)
  - [3. Run the application](#3-run-the-application)
  - [4. Access the application](#4-access-the-application)
- [Configuration](#configuration)
- [Volumes and Mounts](#volumes-and-mounts)
- [Stopping and Restarting Containers](#stopping-and-restarting-containers)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## Features

- Fullstack setup: React frontend, Node.js backend, and MongoDB database.
- Data persistence using Docker volumes, ensuring data is not lost when containers are stopped.
- Hot-reloading through mount binding, reflecting any code changes without needing to rebuild containers.
- Simple orchestration using `docker-compose`.
- Scalable, with room to expand on microservices architecture.

## Requirements

Before you can run this project, ensure you have the following installed:

- **Docker**: [Install Docker](https://docs.docker.com/get-docker/)
- **Docker Compose**: Comes bundled with Docker Desktop or install it separately.

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Set up environment variables

Create a `.env` file in the root directory of the project to set up environment-specific variables for the application, like MongoDB credentials, API URLs, etc.

Example `.env` file:

```bash
# Backend
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb://mongo:27017/your-database-name

# Frontend
REACT_APP_API_URL=http://localhost:5000/api
```

Make sure to adjust the variables according to your setup.

### 3. Run the application

Once everything is set up, you can bring up the entire stack using Docker Compose:

```bash
docker-compose up --build
```

This will start the **Node.js** server, the **React** frontend, and the **MongoDB** database.

### 4. Access the application

- Frontend: Open your browser and go to [http://localhost:3000](http://localhost:3000)
- Backend API: Go to [http://localhost:5000/api](http://localhost:5000/api)
- MongoDB (if Mongo Express or similar UI is configured): [http://localhost:8081](http://localhost:8081)

## Configuration

- **Backend**: The backend code is located in the `/backend` directory.
- **Frontend**: The React frontend code is located in the `/frontend` directory.
- **MongoDB**: The MongoDB container uses default configuration but can be customized in the `docker-compose.yml` file.

### Docker Compose services:

- **Backend**: Node.js server (Express.js).
- **Frontend**: React application.
- **Database**: MongoDB.

## Volumes and Mounts

- **Data Persistence**: The application is configured with Docker volumes to ensure your MongoDB data persists even when the container is shut down. This is defined in the `docker-compose.yml` file.
  
  ```yaml
  volumes:
    - mongo-data:/data/db
  ```

- **Code Synchronization**: Mount binding is used to sync your local code with the container, so changes made to your local files are reflected inside the container without needing a rebuild.

  For example:

  ```yaml
  volumes:
    - ./backend:/usr/src/app
    - ./frontend:/usr/src/frontend
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

## Troubleshooting

- If the containers don’t start correctly, make sure Docker and Docker Compose are installed and running on your machine.
- Check the logs of individual services using:

  ```bash
  docker-compose logs backend
  docker-compose logs frontend
  docker-compose logs mongo
  ```

- In case of any MongoDB connection issues, ensure that the correct `MONGO_URI` is specified in your `.env` file.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
