import React from "react";
import "./App.css";
import moment from "moment";

const DATA = {
  timer: 1234567,
  laps: [1234, 2345, 34567, 98765, 898998908],
};

function Timer({ interval }) {
  const duration = moment.duration(interval);
  const centiseconds = Math.floor(duration.milliseconds() / 10);
  return (
    <span className="duration">
      {duration.minutes()}:{duration.seconds()},{centiseconds}
    </span>
  );
}

function RoundButton({ value, color, background }) {
  return (
    <input
      type="button"
      value={value}
      style={{ color: color, background: background }}
    />
  );
}

function Lap({ number, interval }) {
  return (
    <div className="lap">
      <span>Lap {number}</span>
      <span>{interval}</span>
    </div>
  );
}
// debugger;
function LapsTable({ laps }) {
  const duration = moment.duration(laps);
  const centiseconds = Math.floor(duration.milliseconds() / 10);
  return (
    <ul className="lapsTable">
      {laps.map((lap, index) => (
        <li className="laps" key={laps.length - index}>
          <span>Lap {laps.length - index}</span>
          <span>
            {duration.minutes()}:{duration.seconds()},{centiseconds}
          </span>
        </li>
      ))}
    </ul>
  );
}
function Lapss({ interval }) {
  const duration = moment.duration(interval);
  const centiseconds = Math.floor(duration.milliseconds() / 10);
  return (
    <span>
      {duration.minutes()}:{duration.seconds()},{centiseconds}
    </span>
  );
}

function App() {
  return (
    <>
      <Timer interval={DATA.timer} />
      <div className="buttonRow">
        <RoundButton value="Reset" color="#ffffff" background="#3d3d3d" />
        <RoundButton value="Start" color="#50d167" background="#1b361f" />
      </div>
      <LapsTable laps={DATA.laps} />
      <Lapss interval={DATA.laps} />
    </>
  );
}
console.log(DATA.laps);
export default App;
// color="#50d167"
