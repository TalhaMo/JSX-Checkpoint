import React from 'react';
import theImage from './image1.png';
import './style.css';
import Video from './video';


function App(){
  return (
  <div style={{border:"solid 1px black", maxWidth:'100vw'}}>
    <h1 className="title">My first react project:</h1><br/>
    <img src={theImage} className='img' alt="im1"/><br/>
    <img src="/image2.jpg" className='img' alt="im2" /> <br/>
    <Video />
  </div>
  );
  }
export default App;

 
 



    
