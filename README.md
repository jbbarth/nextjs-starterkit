NextJS starter kit
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

    export DB_HOST=db.example.com
    export DB_USERNAME=a_username
    export DB_DATABASE=a_database
    sequelize db:migrate
    npm start


Build / run a docker image
-----------------------

Build:

    docker build -t a_tag -f misc/Dockerfile .

Run:

    docker run --rm \
      -p 3000:3000 \
      -e DB_HOST=db.example.com \
      -e DB_USERNAME=a_username \
      -e DB_DATABASE=a_database \
       a_tag


FAQ
---

*Do you really need a FAQ?*

Of course, people want to know!

*Why not node 9.x or 10.x?*

As of August 2018 official node images come only for stable versions (even numbers)
and node 10.x breaks with our current dependencies on MacOS with some compilation
errors on fsevents package. Note that it used to break on firebase/grpc too, even
on Linux, so let's wait for a bit before packages are compatible.

*Why not component X, framework Y, deploy method Z?*

This starter kit is opinionated and brings to the table, well my table, what's
critically missing in the JS ecosystem as I practice it for a few years: cohesion.
Also most choices are inspired by mainstream components I already use at work
in one form or another.

If you want to propose something, feel free to do it with an issue with a tiny
rationale. Note that I have 0 interest in the latest hype from last week: while I
put a bit of love in this repository, the end goal is to _escape_ the madness of
gluing technologies together every 3 commits and actually spend more time on
building nice web applications.
