import React from 'react';
import './Main.css';
import './Reset.css';

function App() {
  return (
    <div className="App">
      <>
        <div className="totalWrap">
          <div className="bigBox">
            <div className='bigBoxHeader'>
              <h1>감성적인 남자 - Playlist</h1>
              <div className="cancel"></div>
            </div>
            <div className="middleBox">
              <ul className="content">
                <li className='imgBox'>
                  <img src="" alt=""></img>
                </li>
                <li>
                  <ul className="txtBox">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default App;
