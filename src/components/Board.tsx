import _ from "lodash";
import { useState } from "react";
import Controls from "./Controls";
import Square from "./Square";

export default function Board({ score, setScore, changeBoardPerspective }) {
  const [robotDirection, setRobotDirection] = useState<
    "north" | "east" | "south" | "west"
  >("north");
  const [robotX, setRobotX] = useState<number | undefined>(2);
  const [robotY, setRobotY] = useState<number | undefined>(2);
  const [targetX, setTargetX] = useState<number | undefined>(0);
  const [targetY, setTargetY] = useState<number | undefined>(0);

  function spawnTarget() {
    let newX,
      newY = undefined;
    let spawnNewTarget = true;
    while (spawnNewTarget) {
      newX = _.random(0, 4);
      newY = _.random(0, 4);
      if (newX !== targetX && newY !== targetY) {
        setTargetX(newX);
        setTargetY(newY);
        spawnNewTarget = false;
      }
    }
  }

  if (robotX === targetX && robotY === targetY) {
    setScore(score + 1);
    spawnTarget();
  }

  const grid = [];
  for (let row = 0; row < 5; row++) {
    grid.push([]);
    for (let col = 0; col < 5; col++) {
      grid[row].push(
        <Square
          key={`${col}${row}`}
          x={row}
          y={col}
          robotDirection={robotDirection}
          hasRobot={row === robotX && col === robotY}
          hasTarget={row === targetX && col === targetY}
        />
      );
    }
  }

  function turnRobot(dir) {
    const boardRotations = {
      north: {
        left: "west",
        right: "east"
      },
      east: {
        left: "north",
        right: "south"
      },
      south: {
        left: "east",
        right: "west"
      },
      west: {
        left: "south",
        right: "north"
      }
    };
    setRobotDirection(boardRotations[robotDirection][dir]);
  }

  function moveRobot() {
    if (robotDirection === "north" && robotX > 0) {
      setRobotX(robotX - 1);
    } else if (robotDirection === "east" && robotY < 4) {
      setRobotY(robotY + 1);
    } else if (robotDirection === "south" && robotX < 4) {
      setRobotX(robotX + 1);
    } else if (robotDirection === "west" && robotY > 0) {
      setRobotY(robotY - 1);
    }
  }

  const handleKeyDownOrClick = (val) => (event) => {
    const keyPressToRobotMove = {
      a: "left",
      ArrowLeft: "left",
      d: "right",
      ArrowRight: "right",
      w: "up",
      ArrowUp: "up"
    };

    let dir;
    if (event.type === "click") {
      dir = val;
    } else if (event.type === "keydown") {
      dir = keyPressToRobotMove[event.key];
    }

    if (dir === "left" || dir === "right") {
      turnRobot(dir);
    } else if (dir === "up") {
      moveRobot();
    }
  };

  let boardClasses = "board";
  if (changeBoardPerspective) {
    boardClasses = boardClasses + " board-" + robotDirection;
  }

  return (
    <div>
      <div className={boardClasses}>{grid}</div>
      <Controls handleMoveEvent={handleKeyDownOrClick} />
    </div>
  );
}
