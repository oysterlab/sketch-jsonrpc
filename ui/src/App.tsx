import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { $currentLayerId, api } from 'rpc';

const randomColor = () => '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6)

function App() {
  const [layerId, setLayerId] = useState<string>('')

  useEffect(() => {
    $currentLayerId.subscribe((newId:any) => {
      setLayerId(newId || '')
    })
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div
          style={{
            userSelect: 'none',
            WebkitUserSelect: 'none',
            MozUserSelect: 'none',
            msUserSelect: 'none',
          }}
          onClick={async () => {
          api.changeLayerColor(randomColor(), layerId)
        }}>
          Click here for changing layer color '{layerId}'
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App