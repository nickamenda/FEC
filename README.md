
### I was responsible for the Product Overview section of the project.
View my contributions at <br> [/client/src/components/productComponent](https://github.com/nickamenda/FEC/tree/main/client/src/components/productComponent) <br>

# Front End Capstone

This was a group project we worked on while attending Hack Reactor. Our team was given only a wireframe and business requirements, and had to create a mock e-commerce product page.
We had to create the entire frontend from scratch, create unit tests, set up webpack from scratch, and deploy the application

> ### Group members<br>
> Nick Amenda(Product Overview)<br>
> Cameron Montgomery(Q&A Component)<br>
> Jonathan Liang (Reviews). <br>

## Table of Contents
1. [Technical Overview](#technical-overview)
2. [Usage](#usage)
3. [Requirements](#requirements)
4. [Development](#development)
5. [Production](#production)
6. [Testing](#testing)

[Wireframe](https://xd.adobe.com/view/e600dc0f-454c-44e3-5075-7872d04189ff-9031/)

## Technical Overview

This was the first Hack Reactor project we worked in that was more than a duo. We were tasked with creating the file structure from scratch(no create-react-app allowed) and installing all necessary dependencies ourselves. Over the course of this project we all got more experince with Webpack, node, npm, git workflow, Express, Jest, React, CSS, and plain JS.

## Usage
In order to run the project locally please read [Requirements](#requirements) section for instructions setting up a local .env and for installing dependencies. Find further instructions for setting up the project for development or production in the [Development](#development) and [Production](#production) sections.

## Requirements

Node.js - version 16.0+

### Configuring .env
To run locally you must provide a github Personal Access Token in the config.env file provided for you. Once done, rename the file to just .env and  leave it in the projects root.

### Installing Dependencies
From within the root directory:
> 1. Run ```npm install``` to install all required dependencies

## Development

Setting up the development environment:
> 1. Ensure dependencies are installed.
> 2. To run both server-dev and build-dev with watch flags, run ```npm run start-dev```
> 3. Navigate to localhost port 3000, http://localhost:3000

## Production

Creating production build:
>  1. Ensure dependencies are installed
>  2. To create production build files, run ```npm run build```
>  3. To start server, ```npm run start```

## Testing

To get a coverage report from Jest use script ```npm run test-coverage```, along with the console coverage report an HTML file will be created in the coverage directory located in the projects root.

To just run the jest tests in the console with no coverage report use script ```npm run test```.
