# Fibonacci Generator

#### By Abel Trotter

## Description

A simple React app that retrieves the values of the Fibonacci sequence up to an inputted value.

## User Stories

* As a user, I should be able to enter a number and view the results of a sequence of Fibonacci numbers up to my inputted number.
* As a user, I should be able to navigate to the API endpoint `/fibonacci/num` (where num is some integer) and view the JSON results of the API response.

## Setup on OSX

* Install Node.js
* Clone the repo
* `yarn` installs dependencies
* `yarn start` starts the development server on localhost:3000
* `yarn build` bundles the app into static files for production
* `yarn test` starts the test runner

## Server setup

* Run the following commands to install go dependencies:
  * go get -u github.com/gin-gonic/gin
  * go get -u github.com/gin-gonic/contrib/static
  * go get -u github.com/itsjamie/gin-cors
* Run `go run main.go` from `server/fib-app-server` to start the server on localhost:8080

## Contribution Requirements

1. Clone the repo
1. Make a new branch
1. Commit and push your changes
1. Create a PR

## Technologies Used

* Node.js
* JavaScript
* React
* Babel
* Webpack
* Yarn
* Material-UI
* Go

## License

This software is licensed under the MIT license.

Copyright (c) 2018 **Abel Trotter**
