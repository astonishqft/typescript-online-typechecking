import * as React from "react";
import { typecheck } from "./typecheck";

import "./styles.css";

export default function App() {
  const [code, setCode] = React.useState("const x: string = 100;");
  const [errors, setErrors] = React.useState(typecheck(code));

  const changeCode = (code: string) => {
    setCode(code);
    setErrors(typecheck(code) || []);
  };

  return (
    <div className="App">
      <h1>TS Typechecking in the Browser</h1>
      <h2>Type errors in the code will be reported below</h2>

      <textarea value={code} onChange={e => changeCode(e.target.value)} />

      {errors.length === 0 ? (
        <h2>No errors</h2>
      ) : (
        <div>
          {errors.map((e, i) => (
            <div className="error" key={i}>
              {e.messageText}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
