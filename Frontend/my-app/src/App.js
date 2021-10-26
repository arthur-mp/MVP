import './App.css';
import Header from './components/Header/index.jsx';
import Destaques from './components/Destaques/index.jsx';
import Footer from './components/Footer/index.jsx';
import Lancamentos from './components/Releases/index.jsx';
import { createTheme } from '@material-ui/core/styles';

function App() {
  return (
    <div className="App">
      <Header/>
      <Lancamentos/>
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
    text: {
      primary: '#000',
      secondary: '#fff'
    }
  },
});



export {App, newTheme};
