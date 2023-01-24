# DocSearch

Run typesense with API first
```console
docker run -p 8108:8108 -v /tmp/typesense:/data typesense/typesense:0.23.1 --data-dir /data --api-key=xyz --enable-cors
```

Delete previous collection, then scrape documentation and populate API
```console
curl -H "X-TYPESENSE-API-KEY: ${TYPESENSE_API_KEY}" -X DELETE "https://d3tcn89uq3a6bs.cloudfront.net/collections/sycope"
docker run -p 8080:8080 -it --env-file=./.env -e "CONFIG=$(cat ./typesense.json | jq -r tostring)" typesense/docsearch-scraper
```

# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.