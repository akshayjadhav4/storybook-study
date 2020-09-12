import React from "react";
import Input from "./Input";

export default {
  title: "Form/Input",
  component: Input,
};

export const large = () => <Input variant="large" placeholder="Large" />;
export const medium = () => <Input variant="medium" placeholder="Medium" />;
export const small = () => <Input variant="small" placeholder="Small" />;
