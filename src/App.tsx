
import reactLogo from './assets/react.svg'

function App() {

  return (
    <div className="application">
      <div className="header">
        <div className="menubar">
          <input type="text"></input>
          <button>Find</button>
        </div>
      </div>
      <div className="body">
        <div className="block-left shadow">
          <img src="https://avatars.githubusercontent.com/u/115833152?v=4" />
          <h1>Hi, big text here.</h1>
          <p>Normal usual paragraph</p>
          <small>This is such a tiny text.</small>
        </div>
        <div className="block-right shadow">
          <h1>Hi, big text here.</h1>
          <p>Normal usual paragraph</p>
          <small>This is such a tiny text.</small>
        </div>
      </div>
    </div>
  )
}

export default App