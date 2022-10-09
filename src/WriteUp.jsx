import React from 'react';
import './WriteUp.css';
import VerifiedIcon from '@mui/icons-material/Verified';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ShareIcon from '@mui/icons-material/Share';
import Save from '@mui/icons-material/SaveAlt';
import Follow from '@mui/icons-material/DoneAll';
import Block from '@mui/icons-material/Block';
import Report from '@mui/icons-material/ReportGmailerrorred';

function WriteUp({id,clickhandler}) {
    return (
    <div className="card">
        <div className="card-header">
            <div className="img"><img src="lik123.jpg" alt="img"/></div>
            <div className="info">
                <div className="tag">
                    <div className="name">Saiteja Thoshakani</div>
                    <div className="tick"><VerifiedIcon/></div>
                    <div className="dropdown">
                        <button className={"dropbtn"} onClick={()=>{clickhandler(id);}}><MoreHorizIcon className="dropbtn"/></button>
                        <div id={"drop"+id} className="dropdown-content">
                            <a href="/"><Save/>Save</a>
                            <a href="/"><Follow/>Follow</a>
                            <a href="/"><Block/>Block</a>
                            <a href="/"><Report/>Report</a>
                        </div>
                    </div>
                </div>
                <div className="position">Machine Learning Engineer</div>
            </div>
        </div>
        <div className="title">Why do energy levels converge to a continuum and what is a continuum?</div>
        <div className="description">The continuum is simply a group of energy levels whose energy gaps are negligibly 
        small, and it is reached when the kinetic energy of the electron(s) exceed 
        the potential energy that would trap them,</div>
        <div className="footer">
            <div className="likes">Liked 201</div>
            <div className="views">Views 12K</div>
            <div className="share"><ShareIcon/></div>
        </div>
    </div>
  );
}

export default WriteUp;