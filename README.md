# recipe-app

### My first project with NESTJS

#### Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### ROUTES

1. `/recipe`

```js
/**
 * GET
 * return @typedef Recipe[]
 * optional @param search
 **/
```

```js
/**
 * GET
 * return @typedef Recipe
 **/
```

```js
/**
 * POST
 * return @typedef Recipe
 *
 * required body dto
 *
 * name: string;
 * description: string;
 * imgUrl: string;
 * recipeIngrArr: [{
 *                  quantity: string,
 *                  recipeId: number
 *                }]
 *
 **/
```

```js
/**
 * PUT /:id
 * return @typedef Recipe
 *
 * required body dto
 * optional fields
 *
 * name: string;
 * description: string;
 * imgUrl: string;
 **/
```

```js
/**
 * DELETE /:id
 **/
```

### [this subtext](subpro/subtext.md)

2. `/ingredient`
