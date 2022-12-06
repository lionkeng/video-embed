import React from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>In this example display a video in widescreen dimensions 16:9</h1>
      <div className="videoParent half-wide">
        <div className="videoWrapper">
          <iframe
            src="https://www.youtube.com/embed/pL7hOU8cYkI"
            title="Brazillian Samba at World Cup 2022"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
      <h1>
        In the next example, we want to display a Youtube short in a tall format
      </h1>
      <div className="videoParent quarter-wide">
        <div className="videoWrapperTall">
          <iframe
            src="https://youtube.com/embed/UFzPScy14NI?feature=share"
            title="Jack Black Rocks"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  )
}

export default App
