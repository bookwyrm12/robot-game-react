export default function Square({ x, y, hasTarget, hasRobot, robotDirection }) {
  let classes = "square";
  if (hasRobot && robotDirection !== "north") {
    classes = classes + " board-" + robotDirection;
  }
  return <div className={classes}>{hasTarget ? "X" : hasRobot ? "R" : ""}</div>;
}
