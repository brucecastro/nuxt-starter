# Nuxt 3 Starter

### A Nuxt 3 starter template with a Wordpress backend

This app is a work in progress to explore a headless Wordpress architecture using Nuxt 3 in SSG mode, and deploying to Cloudflare Pages.

The template implements the basic elements of a modern landing page, with a minimalist style. 

The following components are included:

* Hero with Call to Action
* Features
* Quotes
* Updates (Custom Post)
* Social Network Links
* Contact Form (_In Progress_)

## Demo

The demo is available at https://nuxtstarter.pages.dev

## Local Set Up

### Wordpress

1. Install Wordpress. [Local](https://localwp.com/) is an easy, fast solution.
2. Add a Custom Post Type called _Updates_ through code, or install [Custom Post Type UI](https://wordpress.org/plugins/custom-post-type-ui/). 
3. Enable _Show in REST API_ on the new _Updates_ Custom Post Type.
4. Install the [WPGraphQL](https://wordpress.org/plugins/wp-graphql/) plugin.
5. Add a few Updates, make sure to set a featured image on each one.

### Nuxt
1. Install the dependencies with yarn

```bash
yarn install
```

2. Set the API_URL environment variable pointing to the Wordpress GraphQL endpoint. An `.env` file will work locally. Example:

```
API_URL=http://nuxtstarter.local/graphql
```


4. Start the development server on `http://localhost:3000`:

```bash
yarn dev
```

## Deployment

Cloudflare Pages is currently [set up](https://developers.cloudflare.com/pages/framework-guides/deploy-a-nuxt-site/) on this repository. Pushing to the branches `main`, `stage`, and `dev` generates a [static](https://nuxt.com/docs/getting-started/deployment#static-hosting) build and publishes the app to production.

To manually generate a static build for production, use:

```bash
yarn generate
```

Or use `yarn build` to bundle with [SSR](https://nuxt.com/docs/getting-started/introduction#server-side-rendering)

See out the [official deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
