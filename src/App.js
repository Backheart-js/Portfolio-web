import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Describe from './components/About/Describe';
import Skill from './components/About/Skill';
import Education from './components/About/Education';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}></Route>
          <Route path="about" element={<About/>}>
            <Route index element={<Describe/>}/>
            <Route path="describe" element={<Describe/>}/>
            <Route path="skill" element={<Skill/>}/>
            <Route path="education" element={<Education/>}/>
          </Route>
          <Route path="contact" element={<Contact/>}></Route>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
