# React Typescript App for production

The boilerplate for production applications on React using Typescript.

## Config

Configuration uses ts-loader instead of babel, so it's pretty fast. Config is fully written with typescript, and splitted to several files for easier navigation.

## Styling

Project uses css-modules, so all styles are incapsulated. In development mode generates readable classnames like *components_Heading__classname*.

##  Linting

Linter uses airbnb base for typescript with some modifications. Prettier is included.

## Paths

Project uses absolute paths for components and pages folders. More paths can be added to the *paths* variable inside webpack.config.ts

## Commiting

Project uses husky for pre-commiting. Commit won't be recorded with eslint warning in .ts .tsx files. 
