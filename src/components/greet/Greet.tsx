import React from "react";
import { GreetProps } from "./Greet.types";

const Greet: React.FC<GreetProps> = ({ name }) => {
  return <div>{name ? `Hello ${name}` : "Hello"}</div>;
};

export default Greet;
