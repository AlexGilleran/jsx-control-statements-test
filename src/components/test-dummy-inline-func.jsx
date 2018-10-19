import React from "react";

export default class A extends React.Component {
  constructor() {
    super();
    this.field = 'qwerty';
  }

  render() {
    for (const item of [1]) {
      const dummy = () => item;
      return <For each='elem' of={[2]}>{this.field}</For>;
    }
    return null;
  }
}