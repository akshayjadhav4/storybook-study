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

// export const Danger = () => <Button variantColor="red">Danger</Button>;
