const Button = ({ onClick, children }) => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {children}
    </button>
  );
};

const ControlPanel = () => {
  return (
    <div
      onClick={() => {
        alert("<div>요소를 클릭했습니다!");
      }}
    >
      <Button
        onClick={() => {
          alert("Play 버튼을 클릭했습니다!");
        }}
      >
        ▶ Play
      </Button>
      <Button
        onClick={() => {
          alert("Stop 버튼을 클릭했습니다!");
        }}
      >
        ▣ Stop
      </Button>
    </div>
  );
};

export default ControlPanel;
