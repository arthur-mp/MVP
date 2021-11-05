import './App.css';

import { createTheme } from '@material-ui/core/styles';
import Header from './components/Header';
import Releases from './components/Releases';
import Destaques from './components/Destaques';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Releases/>
      <Destaques/>
      <Footer/>
    </div>
  );
}

const newTheme = createTheme({
  palette: {
    primary: {
      main: '#000',
      light: '#akgk'
    },
    secondary:{
      main: '#95d5b2'
    },
    text: {
      primary: '#000',
      secondary: '#000'
    },
    background:{
      paper: '#95d5b2'
    }
  },

});



export {App, newTheme};
