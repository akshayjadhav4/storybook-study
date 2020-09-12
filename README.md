# Storybook

## install

npx sb init

## run

npm run storybook

## Writing Stories

you required 3 files
e.g.

1. Button.js
2. Button.css
3. Button.stories.js

## Story Heirarchy

### V5

To nest components within same group make changes in default export like

```
export default {
title: "Form/Button",
component: Button,
};

```

### V6

```
export default {
  title: "Form/Control/Button",
  component: Button,
};
```

## Rename Story component

```
// Rename
large.storyName = "Large Input";
medium.storyName = "Medium Input";
small.storyName = "Small Input";
```
