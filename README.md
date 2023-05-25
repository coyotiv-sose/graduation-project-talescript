# Bakers calculator App

### Table of Contents

- Project Description
- Features
- Getting Started
- Usage
- Dependencies
- Contributing
- License

### Project Description

The Baker's Cookbook App is a web application designed to assist bakers in managing their recipes, notes, and events. It provides a user-friendly interface for creating, storing, and organizing recipes with the help of a baker's calculator. Users can also add notes to individual recipes, view upcoming events, join events, and manage their personal account.

The application is built using Vue.js for the frontend, Node.js and Express.js for the backend, and MongoDB for the database. It leverages various technologies and libraries to provide an intuitive and seamless user experience for bakers of all skill levels.
Features

- Recipe Creation: Users can create recipes using a baker's calculator and save them.
- Recipe Management: Users can view all recipes and add notes to individual recipes.
- Event Management: Users can view upcoming events, join events, and leave events.
- User Authentication: Users can create an account, log in, and log out.

**Getting Started**
Prerequisites

- Node.js (v14 or above)
- MongoDB

Installation

- Clone the repository.
- Navigate to the project directory.
- Install the dependencies using npm.

Install the dependencies using npm.

```sh
  npm install
```

**Usage**

To start the project

```sh
  npm run noMore
  npm run start
```

The application can now be accessed by opening the browser and navigating to http://localhost:3000.
Dependencies
Backend

- Node.js
- Express.js
- MongoDB
- Other dependencies specified in the package.json file.

Frontend

- Vue.js
- Vue Router
- Other dependencies specified in the package.json file.

Contributing

Contributions to the Baker's Cookbook App are welcome! If you find any bugs, have feature requests, or want to contribute improvements, please follow the usual guidelines

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Legacy commands

**Used while building the project**

- _Docker_

```sh
  docker run -it alpine sh
  -it -> interactive, terminal

  docker run -it node:alpine sh

  docker pull node:alpine #update

  docker run -it node:alpine node #starts with node instead

  docker build -t {node:alpine - name} . {current directory - needs a dot. Needs a project folder or will be install in
  root }

  docker build -t <name> -f Dockerfile .
```

whenever you make a code change you
have to build the image again

```sh
  docker build -t <name> -f Dockerfile .
  docker run <name>
```

To get access by the browser

```sh
  docker run -p 3000:3000 <name>

  docker run -p 3000:3000 -p 35729:35729 -e MONGODB_USERNAME -e MONGODB_PASSWORD -e
  MONGODB_DATABASE --name <name> -v "$(pwd)"/src:/src node:alpine

  docker build -t <name> -f Dockerfile .

  docker rmi -f $(docker images -aq)
```

docker compose
run a local copy of the database in development
27017:27017 -> port 27017 on the host is mapped to port 27017 on the container
-d runs in the background

```sh
  docker compose up
  docker-compose up --build
```
