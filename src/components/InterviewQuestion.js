import React from "react";

function InterviewQuestion() {
  const [value, setValue] = React.useState(0);

  const [boxA, setBoxA] = React.useState(0);
  const [boxB, setBoxB] = React.useState(0);
  const [boxC, setBoxC] = React.useState(0);
  const [boxD, setBoxD] = React.useState(0);


  const AutoFiller = () => {
    const a = 2 * value;
    const b = 2 * a;
    const c = 2 * b;
    const d = 2 * c;

    setBoxA(a);
    setBoxB(b);
    setBoxC(c);
    setBoxD(d);
  };


  const choice1Handler = () => {
    setBoxA((prev) => 2 * prev);
    setBoxB((prev) => 2 * prev);
    setBoxC((prev) => 2 * prev);
    setBoxD((prev) => 2 * prev);
  };

  const choice2Handler = () => {
    setBoxD((prevD) => boxA + boxB + boxC + prevD);
    setBoxA(0);
    setBoxB(0);
    setBoxC(0);
  };


  const choice3Handler = () => {
    setBoxB((prev) => prev + boxA + boxC);
    setBoxD((prev) => prev + boxC);
    setBoxA(0);
    setBoxC(0);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Ball Box Game</h2>


      <div>
        <input
          type="number"
          placeholder="Enter initial value"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />
        <button onClick={AutoFiller}>Fill Boxes</button>
      </div>

      {/* Display */}
      <div style={{ display: "flex", marginTop: "20px", gap: "20px" }}>
        <div style={{ padding: "10px", background: "violet", color: "white" }}>
          <h3>Box A</h3>
          <p>{boxA} Violet balls</p>
        </div>
        <div style={{ padding: "10px", background: "orange", color: "white" }}>
          <h3>Box B</h3>
          <p>{boxB} Orange balls</p>
        </div>
        <div style={{ padding: "10px", background: "green", color: "white" }}>
          <h3>Box C</h3>
          <p>{boxC} Green balls</p>
        </div>
        <div style={{ padding: "10px", background: "white", border: "1px solid black" }}>
          <h3>Box D</h3>
          <p>{boxD} White balls</p>
        </div>
      </div>


      <div style={{ marginTop: "20px" }}>
        <button onClick={choice1Handler}>Choice 1: Double All</button>
        <button onClick={choice2Handler} style={{ marginLeft: "10px" }}>
          Choice 2: Push A+B+C into D
        </button>
        <button onClick={choice3Handler} style={{ marginLeft: "10px" }}>
          Choice 3: Odd → Even
        </button>
      </div>
    </div>
  );
}

export default InterviewQuestion;
