import './App.css';
import Notif from '@mui/icons-material/NotificationsNone';
import Subject from '@mui/icons-material/Subject';
import Ring from '@mui/icons-material/RingVolume';
import Video from '@mui/icons-material/VideocamOutlined';
import Add from '@mui/icons-material/PostAdd';
import WriteUp from './WriteUp';
import { useRef } from 'react';

function App() {
  const cur=useRef(0);
  const func=(c)=>{
    for(let i=1;i<=4;i++){
      document.getElementById('i'+i).style.backgroundColor="white";
    }
    document.getElementById('i'+c).style.backgroundColor="#357b7c";
  }
  window.onclick = function(event){
    console.log(event.target);
    if(!event.target.matches('.dropbtn')){
      clickhandler(0);
    }
  }
  const clickhandler=(id)=>{
    cur.current=id;
    for(let i=1;i<=6;i++){
      if(i==cur.current)document.getElementById("drop"+i).style.display="block";
      else document.getElementById("drop"+i).style.display="none";
    }
  }
  return (
    <div className='base'>
      <div className="display-nav">
          <div className="nav">
            <div className="wrap" href="google.com" onClick={()=>{func(1)}}><div className="live" id="i1"> </div><div className="icon"><Video fontSize="large" /></div></div>
            <div className="wrap" href="google.com" onClick={()=>{func(2)}}><div className="live" id="i2"> </div><div className="icon"><Ring fontSize="large" /></div></div>
            <div className="wrap" href="google.com" onClick={()=>{func(3)}}><div className="live" id="i3"> </div><div className="icon"><Subject fontSize="large" /></div></div>
            <div className="wrap" href="google.com" onClick={()=>{func(4)}}><div className="live" id="i4"> </div><div className="icon"><Notif fontSize="large" /></div></div>
          </div>
      </div>
      <div className="display-writeups">
        <div className="display">
          <div className="header">
            <div className="btncluster">
              <button className='btn btn-up'>Write-ups</button>
              <button className='btn btn-frm'>Forums</button>
            </div>
            <button className='btn'>New<Add/></button>
          </div>
          <div className="writeupContainer">
            <WriteUp id={1} clickhandler={clickhandler}/>
            <WriteUp id={2} clickhandler={clickhandler}/>
            <WriteUp id={3} clickhandler={clickhandler}/>
            <WriteUp id={4} clickhandler={clickhandler}/>
            <WriteUp id={5} clickhandler={clickhandler}/>
            <WriteUp id={6} clickhandler={clickhandler}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
