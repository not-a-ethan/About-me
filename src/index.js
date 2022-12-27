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
    minWidth: "10%",
    maxWidth: "15%",
    height: "1.775vh",
    gridColumn: "1",
    gridRow: "1",
  }

  const skills = ["HTML", "CSS", "JavaScript", "Github"]
  const listItems = skills.map((skill) => <p key={skill} style={itemStyle}>{skill}</p>);

  const content = (
    <div>
      <h1>Skills</h1>
      <div style={mostStyle}>
        {listItems}
      </div>
    </div>
  )

  return content;
}

const Achivements = () => {
  const achivments = ["Replit Ask moderator"]
  const listItems = achivments.map((achivment) => <li key={achivment} >{achivment}</li>);

  const allStyle = {
    marginTop: "2vh",
    position: "absolute",
    left: "30%",
  }

  const content = (
    <div style={allStyle}>
     <h1>Achivements</h1>
       <ul>
          {listItems}
       </ul>
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
    overflow: "hidden",
    display: "grid",
    gap: "0",
  }

  const mostStyle = {
    marginLeft: "2vw",
    marginTop: "2vh",
    gridColumn: "1",
    gridRow: "1",
  }

  const otherStyle = {
    gridColumn: "2",
    gridRow: "1",
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
      <div style={otherStyle}>
        <Achivements />
      </div>
    </div>
  )

  return content;
}

root.render(<App />);