import React from "react";
import Button from "./Button";
import Center from "../Center/Center";

export default {
  title: "Form/Control/Button",
  component: Button,
  // define decorators
  decorators: [(story) => <Center>{story()}</Center>],
};

export const Primary = () => <Button variant="primary">Primary</Button>;
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Success = () => <Button variant="success">Success</Button>;
export const Danger = () => (
  <Center>
    <Button variant="danger">Danger</Button>
  </Center>
);

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
