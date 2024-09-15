import './App.css';
import styled from 'styled-components';
import {Header} from "./layout/Header/Header";
import {Main} from "./layout/sections/Main/Main";
import {Aboutme} from "./layout/sections/Aboutme/Aboutme";
import {Skills} from "./layout/sections/Skills/Skills";
import {Projects} from "./layout/sections/Projects/Projects";


function App() {
    return (
        <div className="App">
           <Header/>
            <Main/>
            <Aboutme/>
            <Projects/>
            <Skills/>
        </div>
    );
}

export default App;

