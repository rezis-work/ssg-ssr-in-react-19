import { createElement as h } from "react";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return h(
    "div",
    null,
    h("h1", null, "Hello Line dev ltd"),
    h("p", null, "this is ssr example"),
    h("button", { onClick: () => setCount(count + 1) }, `Count: ${count}`)
  );
}

export default App;
