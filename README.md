# G:H Web Admin App

## Instalation process
```
git clone git@bitbucket.org:chrisryuichi/guidehuman-admin-web.git
cd guidehuman-admin-web
yarn install
```


## Commiting process

### Precommit
Commit runs precommit script with eslint. It can't be recorded with warnings.

### Branchs naming
- **fix/example-name**  - for fixes
- **feat/example-name** - for features
- **test/exmaple-name** - for tests


### Commits convention
- **fix: example-name**  - for fixes
- **feat: example-name** - for features
- **test: exmaple-name** - for tests

## Tests
Use watch mode while writing tests. When tests are ready, run coverage mode to check coverage. Coverage should be 100% for your tested files.
To check the coverage - go to the coverage folder and open index.html file in the browser.
```
coverage/lcov-report/index.html
```

Start tests
```
yarn test
```

Watch mode
```
yarn test:watch
```

Coverage mode
```
yarn test:cover
```

Rewrite snapshots mode
```
yarn test:snap
```


## Structure

### Application structure
```
src:
  components
  constants
  helpers
  pages
  styles
  store
  App.tsx
  global.d.ts
  index.tsx
```

- **src**             - src folder
- src/**components**  - components folder
- src/**constants**   - constants folder
- src/**helpers**     - helpers folder
- src/**pages**       - pages folder
- src/**styles**      - styles folder
- src/**store**       - RTK folder
- src/**App.tsx**     - main App component
- src/**global.d.ts** - necessary types declarations
- src/**index.tsx**   - app entry point

### Components structure
```
ComponentName:
  index.ts
  ComponentName.tsx
  styles:
    index.ts
    module.scss
  helpers:
    hooks.ts
    models.ts
    functions.ts
    constants.ts
```

- **ComponentName**                      - component folder
- ComponentName/**index.ts**             - default export of component
- ComponentName/styles                   - folder with styles
- ComponentName/styles/**index.ts**      - exports for styles
- ComponentName/**module.scss**          - component's styles (incapsulated module)
- ComponentName/**helpers**              - folder with helpers (if necessary)
- ComponentName/helpers/**hooks.ts**     - component's hooks
- ComponentName/helpers/**models.ts**    - component's models
- ComponentName/helpers/**functions.ts** - component's helpers functions
- ComponentName/helpers/**constants.ts** - component's constants (Enums go here, not to the models)

### Pages structure
There shouldn't be any style or helpers files inside page folders
```
PageName:
  index.ts
  PageName.tsx
```

- **PageName**          - page folder
- PageName/**index.ts**     - Async export for page
- PageName/**PageName.tsx** - Page File

### Slices structure
Since we use RTK for getting and storring data, all modules should be placed in the store folder
```
nameSlice:
  index.ts
  constants.ts
  slice.ts
  models.ts
  actions.ts
  api.ts
  hooks.ts
```

- **nameSlice**              - slice folder
- nameSlice/**index.ts**     - exports for store and the main reducer
- nameSlice/**constants.ts** - constants for slice
- nameSlice/**slice.ts**     - slice file with actions
- nameSlice/**api.ts**       - api file with getters
- nameSlice/**models.ts**    - models file with types
- nameSlice/**actions.ts**  - file with actions
- nameSlice/**hooks.ts**     - hooks

## Styling

### Modules
Project uses css-modules, so all styles are incapsulated. In development mode generates readable classnames like components_Heading__classname. Should be named as module.scss inside component's folder, in other case it won't be watching by webpack.

### Styling Example
Since webpack generate unique name for every class in the module, please don't do any nesting (except of fill for svg). Use only oone level classes. You shouldn't worry about naming. Use simpliest classnames. It won't intersect with another components classnames. Please do not use inline style properties. Use only classes.

Main mobile breakpoint is maxWidth 1024px. Please use it for all media queries.

Please write css rules in alphabetical order.

```
.wrap {
  background: var(--color-black);
  color: var(--color-white);
  ...
}

.text {
  ...
}

.image {
  ...
}
```

Use cls helper for classNames concatenation.
```
<Component className={cls(link, pathname === url && active)} />
```

### Theme
All theme variables stores inside vars.scss file as CSS variables (!!!not SCSS variables). Since they are stored in :root - they will be available everywhere in the app.
```
  :root {
    --color-black: #000;
    --color-white: #fff;
    --color-red: #f00;
  }
```
