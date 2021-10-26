import React from 'react';
import './style.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import  CommitJr from '../../assets/commitjr_new_cinza.svg';
import Logo from '../../assets/Logo.png'


function Footer(){
    return(
        <footer className="main-footer">
            <img className="logoCommit"src={CommitJr} alt='Commit'/>
            <div className="icons-footer">
            Produced by Arthur Pimentel<br></br>
                <a href="https://github.com/arthur-mp" target="_new">
                    <GitHubIcon htmlColor="black"/>
                </a>
                <a href="https://www.linkedin.com/in/arthur-morais-pimentel" target="_new">
                    <LinkedInIcon htmlColor="black"/>
                </a>
            </div>
            <img className="logo" src={Logo} alt='Logo'/>
        </footer>
    );
}

export default Footer;