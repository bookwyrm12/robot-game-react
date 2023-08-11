function ControlButton({ dir, onBtnClick }) {
  return (
    <div>
      <button
        className="square"
        onClick={onBtnClick(dir)}
        onKeyDown={onBtnClick(dir)}
      >
        {dir === "left" && <span>&#8592;</span>}
        {dir === "up" && <span>&#8593;</span>}
        {dir === "right" && <span>&#8594;</span>}
      </button>
    </div>
  );
}

export default function Controls({ handleMoveEvent }) {
  return (
    <div>
      <ControlButton dir="left" onBtnClick={handleMoveEvent} />
      <ControlButton dir="up" onBtnClick={handleMoveEvent} />
      <ControlButton dir="right" onBtnClick={handleMoveEvent} />
    </div>
  );
}
