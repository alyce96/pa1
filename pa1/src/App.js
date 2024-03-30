import React from 'react';
import Instructions from './Instructions';
import './App.css';

const showBurgerpic = event => alert(event.target.id);
const burger1 = [
  {
    picture: 'https://www.figma.com/file/cSDHrY25VQ6CRtJ78RMiH7/burger_pics?type=design&node-id=0%3A1&mode=dev&t=TYg9VNPEDEWEe9Ku-1',
    name: "burger1"
  }
];

function App() {
  const greeting = "greeting";
  const displayAction = false;
  return(
    <div className="container">
      <h1 id={greeting}>Show Burger</h1>
      {displayAction && <p>I am showing a burger</p>}
      <Instructions />
      <ul>
        {
          burger1.map(burger1 => (
            <li key={burger1.name}>
              <button
                onClick={showBurgerpic}
              >
                <span role="img" aria-label={burger1.name} id={burger1.name}>{burger1.burger1}</span>
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default App;