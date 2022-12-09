import React, { useState } from "react"
import "./Task1.css"

const Task1 = () => {
  const [color, setColor] = useState("")

  let myColor = ""

  function sendColor() {
    myColor = color
  }

  const backColor = {
    backgroundColor: color,
  }

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Выберите цвет"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button onClick={sendColor}>Change</button>
      <div className="block" style={backColor}></div>
    </div>
  )
}

export default Task1