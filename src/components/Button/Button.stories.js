import React from "react";
import Button from "./Button";

export default {
  title: "Form/Button",
  component: Button,
};

export const primary = () => <Button variant="primary">Primary</Button>;
export const secondary = () => <Button variant="secondary">Secondary</Button>;
export const success = () => <Button variant="success">Success</Button>;
export const danger = () => <Button variant="danger">Danger</Button>;
