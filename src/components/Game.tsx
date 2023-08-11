import { useState } from "react";

import Board from "./Board";
import Instructions from "./Instructions";
import Timer from "./Timer";
import Score from "./Score";

export default function Game() {
  const [score, setScore] = useState(0);
  const [changeBoardPerspective, setChangeBoardPerspective] = useState(false);

  return (
    <>
      <Board
        score={score}
        setScore={setScore}
        changeBoardPerspective={changeBoardPerspective}
      />
      <Timer />
      <Score score={score} />
      <Instructions />
      <div>
        <input
          type="checkbox"
          id="toggleChangeBoardPerspective"
          checked={changeBoardPerspective}
          onChange={() => setChangeBoardPerspective(!changeBoardPerspective)}
        />
        <label htmlFor="toggleChangeBoardPerspective">
          Change board perspective as the robot turns
        </label>
      </div>
    </>
  );
}
