# sitepen-site

This project was generated with the [Dojo CLI](https://github.com/dojo/cli) & [Dojo CLI create app command](https://github.com/dojo/cli-create-app).

## Build

Run `npm run build` or `dojo build --mode dist` (the `mode` option defaults to `dist`) to create a production build for the project. The built artifacts will be stored in the `output/dist` directory.

## Local Development server

The sitepen website builds static webpages for all of sitepens published blogs. Due to this, the initial build process can take upto 10 minutes. In order to reduce this substantially for local development, three files need to be changed.

**src/blocks/wp-blog-previews.block.ts**
~line 96 - hardcode `totalPages` in the return object to `1`.

**src/widgets/pages/Blog.tsx**
~line 41 - change the `<Link classes={css.categoryItem} to="category" params={{ slug }}>` path from `category` to something that doesn't exist. ie. `<Link classes={css.categoryItem} to="nowhere" params={{ slug }}>`

**src/widgets/BlogListSidePane.tsx**
~line 108 - change the `<Link to="category" params={{ slug: categorySlug }}>` path from `category` to something that doesn't exist. ie. `<Link to="nowhere" params={{ slug: categorySlug }}>`

With these three changes in place, you can run `npm run dev` and view the development server as `localhost:9999`. The build should complete in under a minute with some cavets:

-   Only the first page of blog posts will be fetched and rendered.
-   Category links will not work

Please ensure these changes are reversed before you raise a pull request.

## Further help

To get help for these commands and more, run `dojo` on the command line.
