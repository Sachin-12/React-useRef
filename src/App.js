import { useRef } from "react";
import { ButtonWithForwardRef, ButtonWithoutForwardRef } from "./atoms/Button";

import "./styles.css";

export default function App() {
  const btnWithRefForwarding = useRef();
  const btnWithoutRefForwarding = useRef();
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ButtonWithForwardRef ref={btnWithRefForwarding} />
      <ButtonWithoutForwardRef ref={btnWithoutRefForwarding} />
    </div>
  );
}
