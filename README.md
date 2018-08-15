FOOBAR.example.com
==================

This repository is a basic starter kit for bootstrapping an internal tool
based on the [NextJS](https://nextjs.org/) framework as the main building
block.

The goal is to propose a cohesive experience for developing full stack apps,
whatever the term really means these days. NextJS is nice for frontend with
potential server rendering, but the server story is a bit lacking, and wiring
everything up can take an infinite amount of time.

It features:
- [NextJS](https://nextjs.org/) and [ExpressJS](http://expressjs.com/) for application development
- [Sequelize](http://docs.sequelizejs.com/) for Postgres communication
- [Tailwind CSS](https://tailwindcss.com/) for styles + a few goodies
- [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) for code linting
- code reloading in development via [nodemon](http://nodemon.io/)
- everything needed to build as a Docker container and ultimately deploy the app
- some bits of babel/webpack/whatever to wire everything and add ES6+import syntax
  on the server part.


Install
-------

    nvm use
    yarn install


Develop
-------

First use the correct version of NPM via NVM:

    nvm use

Run the server locally:

    npm run dev


Build / run in production
-------------------------

    npm run build
    npm start

