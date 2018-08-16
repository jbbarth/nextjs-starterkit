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
- [Tailwind CSS](https://tailwindcss.com/) for styles along with [PostCSS](https://postcss.org/), [autoprefixer](https://github.com/postcss/autoprefixer) and [cssnano](https://cssnano.co/)
- [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) for code linting
- [nodemon](http://nodemon.io/) and watch modes for code reloading during development
- recipes for building a Docker image and ultimately deploy the app

TODO:
- add something for nice / easy testing
- add scaffolding capabilities _à-la-Rails_
- add Kubernetes deployment option
- build or integrate basic components for tables, list filtering, forms
- evaluate how apps starting with it could upgrade later


Install
-------

    nvm use
    yarn install


Develop
-------

First use the correct version of NPM via [NVM](https://github.com/creationix/nvm) (optional but recommended):

    nvm use

Run the server locally:

    yarn dev


Build / run in production
-------------------------

    yarn build

    export DB_HOST=db.example.com
    export DB_USERNAME=a_username
    export DB_DATABASE=a_database
    sequelize db:migrate
    yarn start


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

**Do you really need a FAQ?**

Of course, people want to know!

**Why not component X, framework Y, deploy method Z?**

This starter kit is opinionated and brings to the table (well _my_ table), what's
critically missing in the JS ecosystem as I practice it for a few years: cohesion.
Most choices are inspired by mainstream components we already use at work in one
form or another.

If you want to propose something, feel free to do it via an issue with a tiny
rationale. Note that I have 0 interest in the latest hype from last week: while I
put a bit of love in this repository, the end goal is to _escape_ the madness of
gluing technologies together every 3 commits, and actually spend more time on
building nice web applications.
