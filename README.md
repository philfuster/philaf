# Phil's Monorepo

I want to create a monorepo using `turbopack` and `pnpm` that will contain front-end applications and a service based application as the back-end.

## The Plan

Initially I will focus on building a `blog` application front-end.

The application will be written using `TypeScript`.
`React` as the front-end framework and `Vite` as the build tool/development environment tooling.

Blog posts will be stored locally in `.md` files.

I would like to get it deployed and operational.
Really don't much about that but more will be detailed in the future in the [Deployment Strategy](#deployment-strategy-tbd) section.

After the `blog` application is up and running, the next step is building a back-end application that the `blog` will talk to get the blog posts from a database.

The backend will be built using `TypeScript` as well.
The rest I have not decided on.

I'm thinking a service based architecture.

I work with [Moleculer js](https://moleculer.service), a microservices framework for nodejs at work and it has been a pretty good experience.

I just don't know what else is out there and may do some shopping around when the time comes.

### Deployment Strategy (TBD)

## Applications

### Blog Front-End

A front-end application for a blog built using React.

HTML, CSS & JavaScript would suffice for creating a blog but the goal is not to practice the basics.

I want to gain experience building a modern application using industry standard technology & toolchains that will allow me to learn about building applications for production.

### Services Back-End

A service based application that the front-end will talk to to get blog data.

Considering a service based approach to writing a back-end.

I don't know what I'll build it with yet.

Could check out something like [deno](https://deno.land/) or just stick with `node`.
