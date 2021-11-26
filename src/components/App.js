import '../styles/app.scss'
import Header from './shared/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom"
import { useState,useEffect } from 'react';
import { Appearance } from 'react-native';

function App() {
  const colorScheme = Appearance.getColorScheme();
  let [dark,setDark] = useState(colorScheme === "dark");
  
  const handleClick = () => {
    setDark(!dark);
  }

  useEffect(() => {
    setDark(colorScheme === "dark");
}, [colorScheme]);

  useEffect(() => {
    document.body.style.backgroundColor = dark ? "#202121" : "white";
  },[dark]);

  return (
    <BrowserRouter>
      <Header dark={dark} handleClick={handleClick}/>
      <div id="content">
        <Routes>
          <Route path="/" element={<About dark={dark} />} />
          <Route path="projects" element={<Projects dark={dark}/>} />
          <Route path="contact" element={<Contact dark={dark}/>} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
