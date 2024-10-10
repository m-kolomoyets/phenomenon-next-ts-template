This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## 📦 Stack

-   [Next.js](https://nextjs.org/docs) - React Framework
-   [React.js](https://reactjs.org) - UI library
-   [Typescript](https://www.typescriptlang.org) - Static type checker
-   [@svgr/webpack](https://github.com/gregberge/svgr/tree/main) - tool to transform SVG into React components
-   [CLSX](https://github.com/lukeed/clsx) - classnames utility
-   [ESLint](https://eslint.org/) - linting utility
-   [Prettier](https://prettier.io/) - code formatter
    -   [@ianvs/prettier-plugin-sort-imports](https://github.com/ianvs/prettier-plugin-sort-imports) - plugin to sort import declarations 
-   [Commitlint](https://commitlint.js.org/) - lint commit messages
-   [Stylelint](https://stylelint.io/) - CSS linter

## 🚀 Quick start

1. Install [Node.js](https://nodejs.org);
    > Require [Node.js](https://nodejs.org) v18 or >=v20 (hydrogen as minimum)
2. Install the NPM dependencies by running `npm ci`;
3. You should create `.env.local` and add variables. You can look in [.env.local.example](./.env.local.example) file;
4. Update project metadata:
   1. Title ([/app/layout.tsx](./app/layout.tsx) metadata constant)
   2. Description ([/app/layout.tsx](./app/layout.tsx) metadata constant)
   3. Favicons 
      1. `.ico` - add `favicon.icon` file in the `/app` folder
      2. `.svg` - add `icon.svg` file in the `/app` folder
      3. `.png` - add `apple-icon.png` file in the `/app` folder
          > Docs: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons


## 🤖 Commands

-   Run the local dev server at `localhost:3000`:
    ```
    npm run dev
    ```
-   Build your production site to `./.next/`:
    ```
    npm run build
    ```
-   Preview your build locally, before deploying at `localhost:3000` !(should be free, no replacement to the closest port):
    ```
    npm run start
    ```
-   Check your CSS for errors and warnings:
    ```
    npm run lint:stylelint
    ```
-   Check your code formatting:
    ```
    npm run lint:prettier
    ```
-   Fix your code formatting:
    ```
    npm run lint:prettier:fix
    ```
-   Check your code all together:
    ```
    npm run lint
    ```
-   Install husky:
    ```bash
    npm run prepare
    ```

## 🧶 Structure

> To create components [create-phen-component](https://github.com/m-kolomoyets/create-phen-component) CLI can be used

-   `src/app` - contains all routes with additional Next.js configurations like layouts and loading screens
    -   `favicon.ico` - .ico favicon for static site rendering
    -   `icon.svg` - .svg favicon for static site rendering
    -   `apple-icon.png` - .png favicon for static site rendering
    -   `/fonts` - folder can contain static folder files (.ttf is recommended) can be imported by `next/font/local` in root layout
    -   `layout.tsx` - root layout. Should be a component accepts children prop
    -   `loading.tsx` - root loading component
    -   `not-found.tsx` - 404 page
    -   `/(<route-group-name>)` - folder represents routes group. It will no affect browser route string, but can include `layout.tsx` to wrap all sub-routes with layout. Includes routes folders etc.
    -   `/<route-name>` - folder with route name. will match browser route. Can include other route folders and route groups
        -   `page.tsx` - contains page component itself
        -   `layout.tsx` - route layout. Should be a component accepts children prop
        -   `loading.tsx` - route/route-group loading component
    - `/api` - api routes folder. Requests will be sent to same origin as a project is (`/api/hello` -> `localhost:3000/api/hello`)
        - `route.ts` - route entry file
        - `/<route-group>` - folder will contain nested routes. Can include other route groups
          -  - `route.ts` - route entry file
-   `src/ui` contains some shared components without business logic like buttons, inputs, selects, titles, texts etc. Each component should consist of that files:

    -   `<component-name>.tsx` - the component file itself (change `component-name` to the actual name of the component);
    -   `<component-name>.module.css` - the styles of component file (optional);
    -   `types.ts` - the types of component file (optional);
    -   `/hooks` - contains component hooks (optional). Should include:
        -   `<hook-name>.ts` - the hook file itself (change `hook-name` to the actual name of the hook);
    -   `constants.ts` - the constants of component file (optional);
    -   `/utils` - the utils of component (optional). Should include:
        -   `<util-name>.ts` - the util file itself (change `util-name` to the actual name of util);
        -   `common.ts` - the common file of utils (optional). Can be used without tests;
    -   `index.ts` - the entry file for component;

-   `src/components` a less independent entity consisting of `src/ui` components. For example the card component, it can be used anywhere. It can have little business logic. Each component should consist of that files:
    -   `<component-name>.tsx` - the component file itself;
    -   `<component-name>.module.css` - the styles of component file (optional);
    -   `types.ts` - the types of component file (optional);
    -   `/hooks` - contains component hooks (optional). Should include:
        -   `<hook-name>.ts` - the hook file itself (change `hook-name` to the actual name of the hook);
    -   `constants.ts` - the constants of component file (optional);
    -   `schemas.ts` - the schemas of component file (optional);
    -   `/utils` - the utils of component (optional). Should include:
        -   `<util-name>.ts` - the util file itself (change `util-name` to the actual name of util);
        -   `common.ts` - the common file of utils (optional). Can be used without tests;
    -   `/store` - contains local store dir (optional). Should consist of:
        -   `<store-name>.ts` - the store file itself (change `store-name` to the actual name of the store);
    -   `/context` - the context dir of component file (optional). Should consist of:
        -   `<context-name>.tsx` - the context file itself (change `scontext-nam` to the actual name of the context);
    -   `index.ts` - the entry file for component;
    -   `/components` - the component dir of components (optional). Should consist of like `src/components`;
-   `src/components/layout` contains some layouts. It should use like wrapper;
-   `src/modules` contains some independent features, that features have own area of responsibility. We can use here connecting to store, fetch some data etc. For example we have the Comments module, it should consist of `src/components`, `src/ui` and own components. Each module should consist of that files:
    -   `<component-name>.tsx` - the component file itself;
    -   `<component-name>.module.css` - the styles of component file (optional);
    -   `types.ts` - the types of component file (optional);
    -   `/hooks` - contains component hooks (optional). Should include:
        -   `<hook-name>.ts` - the hook file itself (change `hook-name` to the actual name of the hook);
    -   `constants.ts` - the constants of component file (optional);
    -   `schemas.ts` - the schemas of component file (optional);
    -   `/utils` - the utils of component (optional). Should include:
        -   `<util-name>.ts` - the util file itself (change `util-name` to the actual name of util);
        -   `common.ts` - the common file of utils (optional). Can be used without tests;
    -   `/store` - contains local store dir (optional). Should consist of:
        -   `<store-name>.ts` - the store file itself (change `store-name` to the actual name of the store);
    -   `/context` - the context dir of component file (optional). Should consist of:
        -   `<context-name>.tsx` - the context file itself (change `context-name` to the actual name of the context);
    -   `index.ts` - the entry file for component;
    -   `components` - the component dir of components (optional). Should consist of like `src/components`;
-   `src/api` contains api dir. Should consist of:
    -   `<api-name>.ts` - the api file itself (change the `api-name` to the actual api name);
-   `src/store` contains global store dir. Should consist of:
    -   `<store-name>.ts` - the store file itself (change `store-name` to the actual name of the store);
-   `src/hooks` contains global hooks dir. Should consist of:
    -   `/api` - contains api hooks dir;
    -   `<hook-name>.ts` - the hook file itself (change `hook-name` to the actual name of the hook);
-   `src/utils` contains global utils dir. Should consist of:
    -   `<util-name>.ts` - the util file itself (change `util-name` to the actual name of util);
    -   `<util-name>.test.ts` - the test file of util;
    -   `common.ts` - the common file of utils (optional). Can be used without tests;
-   `src/constants.ts` contains global constants;
-   `schemas.ts` - contains globals schemas;
-   `src/types.ts` contains global types;
-   `src/styles` contains global style files;
