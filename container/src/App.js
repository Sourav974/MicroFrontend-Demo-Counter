import React from "react";
import CounterApp from "./components/CounterApp";
import { mount } from "counter/CounterApp";

// console.log(mount);

// export default () => {
//   return <h1> Hi there!!</h1>;
// };

export default () => {
  return (
    <div>
      <h1>Hi There!!</h1>
      <hr />
      <CounterApp />
    </div>
  );
};
