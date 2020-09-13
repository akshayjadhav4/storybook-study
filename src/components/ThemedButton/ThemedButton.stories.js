import React from "react";
import { Button } from "@chakra-ui/core";

export default {
  title: "Themed Button",
  component: Button,
  argTypes: { onClick: { action: "clicked" } },
};

const Templete = (args) => <Button {...args} />;

export const Success = Templete.bind({});
Success.args = {
  variantColor: "green",
  children: "Success",
};

export const Danger = Templete.bind({});
Danger.args = {
  variantColor: "red",
  children: "Success",
};

export const Log = () => (
  <Button variantColor="blue" onClick={() => console.log("Log Clicked")}>
    Log On Console
  </Button>
);
