import React from 'react';
import './style.css';
import {newTheme} from '../../App';
import SearchIcon from '@mui/icons-material/Search';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Logo from '../../assets/Logo.png'
import { InputAdornment, 
        TextField, 
        ThemeProvider, 
       } from '@mui/material';

function Header() {
    return(

        <ThemeProvider theme={newTheme}>
            <header className="main-header">
                <img src={Logo} alt='Logo'/>
                <div className="menu-links">
                    <span> Releases </span>
                    <span> | </span>
                    <span> Highlights </span>
                </div>

                    <TextField 
                        id="outlined-basic"
                        label="Search movie" 
                        focused 
                        color="primary"
                        InputProps={{
                            startAdornment: (<InputAdornment position="start">
                                <SearchIcon htmlColor="black"/>
                            </InputAdornment>
                            ),
                            endAdornment:(
                                <InputAdornment position="end">
                                    <HighlightOffIcon htmlColor="black"/> 
                                </InputAdornment>
                            ),
                        }}
                        variant="outlined"
                    />
            </header>
        </ThemeProvider>

    );
    

}

export default Header;