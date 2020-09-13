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

## Sorting Stories

goto .storybook/preview.js and add to sort stories alphabetically.

```
 options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
```

## Story within Story

```
import React from "react";
import { Primary } from "../Button/Button.stories";
import { Medium } from "../Input/Input.stories";

export default {
  title: "Form/Newsletter",
};

export const PrimaryNewsletter = () => (
  <>
    <Medium />
    <Primary />
  </>
);

```

## Using args in V6

A story is a component with a set of arguments (props, slots, inputs, etc). “Args” are Storybook’s mechanism for defining those arguments as a first class entity that’s machine readable.

```

export default {
  title: "Form/Control/Button",
  component: Button,
  args: {
    children: "Button",
  },
};

// Args
const Template = (args) => <Button {...args} />;

export const PrimaryA = Template.bind({});
PrimaryA.args = {
  variant: "primary",
  children: "Primary Args",
};

// reusing args from another story (i.e from PrimaryA)
export const LongPrimaryA = Template.bind({});
LongPrimaryA.args = {
  ...PrimaryA.args,
  children: "Long Primary Args",
};


```

```
<!-- The args object can be defined at the story and component level -->

export default {
  title: "Form/Control/Button",
  component: Button,
  args: {
    children: "Button",
  },
};


// Args
const Template = (args) => <Button {...args} />;

export const PrimaryA = Template.bind({});
PrimaryA.args = {
  variant: "primary",
};

// reusing args from another story (i.e from PrimaryA)
export const LongPrimaryA = Template.bind({});
LongPrimaryA.args = {
  ...PrimaryA.args,
};


```

## Decorators

First create base component with style you required then follow below methods:

### 1 method

```
export const Danger = () => (
  <Center>
    <Button variant="danger">Danger</Button>
  </Center>
);
```

### 2 method

```
export default {
  title: "Form/Control/Button",
  component: Button,
  <!-- define decorators -->
  decorators: [(story) => <Center>{story()}</Center>],
};
```

## Global Decorators

For giving same style to all stories

in .storybook/preview.js add

```
import React from "react";
import { addDecorator } from "@storybook/react";
import Center from "../src/components/Center/Center";

addDecorator((story) => <Center>{story()}</Center>);
```
