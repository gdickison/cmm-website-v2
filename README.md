# Welcome to Collegium Musicum Moscow!

- This site is version 2.0

## Toolkit

- Built on [Remix](https://remix.run/docs)
- Designed with AI assitance from tldraw's [Make Real](https://makereal.tldraw.com/) feature
and [Replit](https://replit.com)
- Styled with [Tailwind](https://tailwindcss.com)
- Deployed to (TBD)
- Design/Build by [Greg Dickison](https://github.com/gdickison/) of [Blue Canoe Web Development](https://bluecanoe.dev)

## Dev Notes

- This site uses a combination of Tailwind and vanilla CSS, because some things are just easier in vanilla

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`
