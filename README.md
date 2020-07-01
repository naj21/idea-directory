# Idea Directory

This repositroy contains the idea-directory web project. A project that provides a platform where tech related ideas can be dispensed by users.

## Installation
### Installation without docker
* Clone the repository
* make sure that Node.js is installed
* cd into app
* Install Node.js module list with [npm](www.npmjs.com)
 
 > npm install

## Start
### Start the app with npm:
 
> npm start
 
* Navigate to localhost:3000 

## Development

We use [gitflow](https://medium.com/trainingcenter/utilizando-o-fluxo-git-flow-e63d5e0d5e04) to coordinate the
development of Idea Directory.

## Documentation

To ensure code consistnecy and DRYness, we installed [react-styleguidist](https://github.com/styleguidist/react-styleguidist) which enables us to visually document components.
To view component showcase run `npm run-script styleguide` (Development mode).
To build production version of the component showcase run `npm run-script styleguide:build` (When we are ready to deploy this documentation somewhere).