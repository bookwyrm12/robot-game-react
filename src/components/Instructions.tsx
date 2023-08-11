import { useState } from "react";

export default function Instructions() {
  const [showInstructions, setShowInstructions] = useState(false);

  return (
    <>
      <button onClick={() => setShowInstructions(!showInstructions)}>
        {showInstructions ? "Hide" : "Show"} Instructions
      </button>
      {showInstructions && (
        <p>
          Use the 'a' key to turn left
          <br />
          Use the 'd' key to turn right
          <br />
          Use the 'w' key to move forward
        </p>
      )}
    </>
  );
}
