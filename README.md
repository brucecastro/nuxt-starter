# Nuxt 3 Starter

### A Nuxt 3 starter template built for use with Headless Wordpress

The template uses a minimalist style, with the basic elements of a modern landing page. 

Includes the following components:

* Hero with Call to Action
* Features
* Quotes
* Updates (Custom Post)
* Social Network Links
* Contact Form (_In Progress_)

## Demo

_Coming soon..._

## Local Set Up

### Wordpress

1. Install Wordpress. [Local](https://localwp.com/) is an easy, fast solution.
2. Add a Custom Post Type called _Updates_ through code, or install [Custom Post Type UI](https://wordpress.org/plugins/custom-post-type-ui/). 
3. Enable _Show in REST API_ on the new _Updates_ Custom Post Type.
4. Install the [WPGraphQL](https://wordpress.org/plugins/wp-graphql/) plugin.
5. Add a few Updates, include a featured image on each

### Nuxt
1. Install the dependencies with yarn

```bash
yarn install
```

2. Set the API (Wordpress) URL in as an environment variable. Using a `.env` file works well. Example:

```
API_URL=http://nuxtstarter.local/graphql
```


4. Start the development server on `http://localhost:3000`:

```bash
yarn dev
```

## Deployment

Cloudflare Pages is currently [set up](https://developers.cloudflare.com/pages/framework-guides/deploy-a-nuxt-site/) to build and statically render the application with [SSG](https://nuxt.com/docs/getting-started/deployment#static-hosting), whenever new changes are pushed to this repository.

To manually generate a static build for production, use:

```bash
yarn generate
```

Or use `yarn build` to bundle with [SSR](https://nuxt.com/docs/getting-started/introduction#server-side-rendering)

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
