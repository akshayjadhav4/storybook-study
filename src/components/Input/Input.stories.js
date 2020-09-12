import React from "react";
import Input from "./Input";

export default {
  title: "Form/Input",
  component: Input,
};

export const Large = () => <Input variant="large" placeholder="Large" />;
export const Medium = () => <Input variant="medium" placeholder="Medium" />;
export const Small = () => <Input variant="small" placeholder="Small" />;

// Rename
Large.storyName = "Large Input";
Medium.storyName = "Medium Input";
Small.storyName = "Small Input";
