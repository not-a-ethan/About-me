import React from 'react';
import * as ReactDOM from 'react-dom/client';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const Skills = () => {
  const mostStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "1vw",
    textAlign: "center",
  }

  const itemStyle = {
    color: "white",
    background: "#0108B3",
    border: "1px solid #000000",
    borderRadius: "100px",
    minWidth: "5%",
    maxWidth: "7.5%",
    height: "1.775vh",
    gridColumn: "1",
    gridRow: "1",
  }

  const content = (
    <div>
      <h1>Skills</h1>
      <div style={mostStyle}>
        <p style={itemStyle}>HTML</p>
        <p style={itemStyle}>CSS</p>
        <p style={itemStyle}>JavaScript</p>
        <p style={itemStyle}>Github</p>
      </div>
    </div>
  )

  return content;
}

const App = () => {
  const allStyle = {
  // I want a light grey backtground rgb
    background: "rgb(160, 160, 160)",
    width: "100vw",
    height: "100vh",
    padding: "0",
    margin: "0",
  }

  const mostStyle = {
    marginLeft: "2vw",
    marginTop: "2vh",
  }

  const pfpStyle = {
    "borderRadius": "100%",
  }

  const content = (
    <div style={allStyle}>
      <br />
      <div style={mostStyle}>
        <img src="./images/pfp.png" alt="pfp" style={pfpStyle} />
        <h2>Ethan</h2>

        <Skills />
      </div>
    </div>
  )

  return content;
}

root.render(<App />);